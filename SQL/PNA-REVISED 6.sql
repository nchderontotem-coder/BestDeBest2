-- =====================================================
-- 3. VIEWS (3 Views)
-- =====================================================

CREATE OR REPLACE VIEW vw_order_summary AS
SELECT 
    o.order_id,
    o.order_date,
    o.status,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.email,
    o.total_amount,
    COUNT(oi.order_item_id) AS total_items,
    SUM(oi.quantity) AS total_units
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY o.order_id, o.order_date, o.status, c.first_name, c.last_name, c.email, o.total_amount;

CREATE OR REPLACE VIEW vw_inventory_status AS
SELECT 
    p.product_id,
    p.product_name,
    p.sku,
    cat.category_name,
    w.warehouse_name,
    i.quantity_on_hand,
    i.reorder_level,
    CASE 
        WHEN i.quantity_on_hand <= i.reorder_level THEN 'REORDER NEEDED'
        ELSE 'OK'
    END AS stock_status
FROM inventory i
JOIN products p ON i.product_id = p.product_id
JOIN warehouses w ON i.warehouse_id = w.warehouse_id
LEFT JOIN categories cat ON p.category_id = cat.category_id;

CREATE OR REPLACE VIEW vw_monthly_sales AS
SELECT 
    p.product_id,
    p.product_name,
    DATE_FORMAT(sh.sale_date, '%Y-%m') AS sale_month,
    SUM(sh.quantity_sold) AS total_qty_sold,
    SUM(sh.revenue) AS total_revenue
FROM sales_history sh
JOIN products p ON sh.product_id = p.product_id
GROUP BY p.product_id, p.product_name, DATE_FORMAT(sh.sale_date, '%Y-%m');

-- =====================================================
-- STORED PROCEDURES
-- =====================================================

DROP PROCEDURE IF EXISTS sp_place_order;
DROP PROCEDURE IF EXISTS sp_generate_forecast;
DROP PROCEDURE IF EXISTS sp_get_reorder_list;

DELIMITER //

CREATE PROCEDURE sp_place_order(
    IN p_customer_id INT,
    IN p_product_id INT,
    IN p_quantity INT,
    IN p_shipping_address_id INT,
    OUT p_order_id INT,
    OUT p_message VARCHAR(255)
)
BEGIN
    DECLARE v_stock INT DEFAULT 0;
    DECLARE v_price DECIMAL(10,2);

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET p_message = 'Error: Transaction failed';
        SET p_order_id = NULL;
    END;

    START TRANSACTION;

    SELECT COALESCE(SUM(quantity_on_hand), 0) INTO v_stock
    FROM inventory
    WHERE product_id = p_product_id;

    IF v_stock < p_quantity THEN
        SET p_message = 'Insufficient stock';
        SET p_order_id = NULL;
        ROLLBACK;
    ELSE
        SELECT unit_price INTO v_price FROM products WHERE product_id = p_product_id;

        INSERT INTO orders (customer_id, shipping_address_id, order_date, total_amount)
        VALUES (p_customer_id, p_shipping_address_id, CURDATE(), v_price * p_quantity);
        
        SET p_order_id = LAST_INSERT_ID();

        INSERT INTO order_items (order_id, product_id, quantity, unit_price)
        VALUES (p_order_id, p_product_id, p_quantity, v_price);

        UPDATE inventory
        SET quantity_on_hand = quantity_on_hand - p_quantity
        WHERE product_id = p_product_id
        LIMIT 1;

        SET p_message = 'Order placed successfully';
        COMMIT;
    END IF;
END //

CREATE PROCEDURE sp_generate_forecast(
    IN p_product_id INT,
    IN p_months_back INT,
    IN p_forecast_month DATE
)
BEGIN
    DECLARE v_avg_qty DECIMAL(10,2);

    SELECT AVG(monthly_qty) INTO v_avg_qty
    FROM (
        SELECT SUM(quantity_sold) AS monthly_qty
        FROM sales_history
        WHERE product_id = p_product_id
          AND sale_date >= DATE_SUB(p_forecast_month, INTERVAL p_months_back MONTH)
          AND sale_date < p_forecast_month
        GROUP BY YEAR(sale_date), MONTH(sale_date)
    ) AS monthly_data;

    IF v_avg_qty IS NOT NULL THEN
        INSERT INTO demand_forecasts (product_id, forecast_month, predicted_qty, confidence_level, method)
        VALUES (p_product_id, p_forecast_month, ROUND(v_avg_qty), 80.00, 'Moving Average')
        ON DUPLICATE KEY UPDATE
            predicted_qty = ROUND(v_avg_qty),
            generated_at = CURRENT_TIMESTAMP;
    END IF;
END //

CREATE PROCEDURE sp_get_reorder_list()
BEGIN
    SELECT 
        p.product_id,
        p.product_name,
        p.sku,
        i.quantity_on_hand,
        i.reorder_level,
        (SELECT supplier_name FROM suppliers s WHERE s.supplier_id = p.supplier_id) AS supplier
    FROM inventory i
    JOIN products p ON i.product_id = p.product_id
    WHERE i.quantity_on_hand <= i.reorder_level
    ORDER BY (i.reorder_level - i.quantity_on_hand) DESC;
END //

DELIMITER ;


