-- =====================================================
-- 5. TRIGGERS (2 Triggers)
-- =====================================================

DROP TRIGGER IF EXISTS trg_after_order_item_insert;
DROP TRIGGER IF EXISTS trg_before_inventory_update;

DELIMITER //

CREATE TRIGGER trg_after_order_item_insert
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (table_name, action_type, record_id, notes)
    VALUES ('order_items', 'INSERT', NEW.order_item_id, 
            CONCAT('Product ', NEW.product_id, ' qty ', NEW.quantity, ' added to order ', NEW.order_id));
END //

CREATE TRIGGER trg_before_inventory_update
BEFORE UPDATE ON inventory
FOR EACH ROW
BEGIN
    IF NEW.quantity_on_hand < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Quantity on hand cannot be negative';
    END IF;
END //

