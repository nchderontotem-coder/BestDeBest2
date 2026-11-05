-- =====================================================
-- 6. DEMO SELECT QUERIES (Full Results - No LIMIT)
-- =====================================================

-- RESULT #1 : Top Products by Revenue (ALL)
SELECT 
    p.product_name AS Product_name,
    SUM(sh.quantity_sold) AS Total_units_Sold,
    SUM(sh.revenue) AS Total_revenue
FROM sales_history sh
JOIN products p ON sh.product_id = p.product_id
GROUP BY p.product_id, p.product_name
ORDER BY Total_revenue DESC;


-- RESULT #2 : Warehouse Inventory Status (ALL)
SELECT 
    w.warehouse_name AS Warehouse_name,
    p.product_name AS Product_name,
    i.quantity_on_hand AS Quantity_on_hand,
    i.reorder_level AS Reorder_level,
    CASE 
        WHEN i.quantity_on_hand <= i.reorder_level THEN 'Reorder Needed'
        ELSE 'Sufficient'
    END AS Stock_status
FROM inventory i
JOIN products p ON i.product_id = p.product_id
JOIN warehouses w ON i.warehouse_id = w.warehouse_id
ORDER BY w.warehouse_name, p.product_name;

-- RESULT #3 : Orders with Customer Name (ALL)
SELECT 
    o.order_id AS Order_id,
    CONCAT(c.first_name, ' ', c.last_name) AS Customer_name,
    o.order_date AS Order_date,
    o.status AS Status,
    o.total_amount AS Total_amount,
    a.city AS Shipping_city
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
LEFT JOIN addresses a ON o.shipping_address_id = a.address_id
ORDER BY o.order_id;


-- RESULT #4 : Order Items Detail (ALL)
SELECT 
    oi.order_id AS Order_id,
    p.product_name AS Product_name,
    oi.quantity AS Quantity,
    oi.unit_price AS Unit_price,
    (oi.quantity * oi.unit_price) AS Subtotal
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
ORDER BY oi.order_id;


-- RESULT #5 : Product Sales Ranking (ALL)
SELECT 
    p.product_name AS Product_name,
    SUM(sh.quantity_sold) AS Total_units_Sold,
    SUM(sh.revenue) AS Total_revenue
FROM sales_history sh
JOIN products p ON sh.product_id = p.product_id
GROUP BY p.product_id, p.product_name
ORDER BY Total_revenue DESC;


-- RESULT #6 : Product Reviews (ALL)
SELECT 
    p.product_name AS Product_name,
    CONCAT(c.first_name, ' ', c.last_name) AS Reviewer,
    pr.rating AS Rating,
    pr.review_text AS Review_text
FROM product_reviews pr
JOIN products p ON pr.product_id = p.product_id
JOIN customers c ON pr.customer_id = c.customer_id
ORDER BY pr.rating DESC;


-- RESULT #7 : Demand Forecast (ALL)
SELECT 
    p.product_name AS Product_name,
    df.forecast_month AS Forecast_month,
    df.predicted_qty AS Predicted_qty,
    df.confidence_level AS Confidence_level,
    df.method AS Method
FROM demand_forecasts df
JOIN products p ON df.product_id = p.product_id
ORDER BY df.forecast_month, p.product_name;