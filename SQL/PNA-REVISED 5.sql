-- Sales History
INSERT INTO sales_history (product_id, sale_date, quantity_sold, revenue)
SELECT product_id, DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND()*180) DAY),
       FLOOR(1 + RAND()*5), unit_price * FLOOR(1 + RAND()*5)
FROM products;

-- Product Reviews
INSERT INTO product_reviews (product_id, customer_id, rating, review_text) VALUES
(1, 1, 5, 'Excellent phone, very fast!'),
(2, 2, 4, 'Great camera quality'),
(3, 3, 5, 'Best laptop I ever owned'),
(16, 4, 4, 'Good sound quality'),
(21, 5, 5, 'Perfect for healthy cooking'),
(36, 6, 3, 'Average quality shirt'),
(1, 7, 5, 'Worth every peso'),
(4, 8, 4, 'Handles games well'),
(5, 9, 5, 'Amazing tablet!'),
(6, 10, 4, 'Very good camera phone'),
(7, 11, 4, 'Value for money'),
(8, 12, 3, 'Average performance'),
(9, 13, 5, 'Love the design'),
(10, 14, 4, 'Fast charging is great'),
(11, 15, 5, 'One of the best phones'),
(12, 16, 4, 'Good battery life'),
(13, 17, 3, 'Okay for the price'),
(14, 18, 5, 'Powerful desktop'),
(15, 19, 4, 'Smooth 144Hz'),
(17, 20, 5, 'Loud and clear sound'),
(18, 21, 4, 'Accurate fitness tracking'),
(19, 22, 5, 'Charges very fast'),
(20, 23, 4, 'Stable WiFi'),
(22, 24, 5, 'Cooks perfectly'),
(23, 25, 4, 'Easy to use'),
(24, 26, 5, 'Boils water fast'),
(25, 27, 4, 'Quiet fan'),
(26, 28, 5, 'Cleans the floor well');

-- Demand Forecasts
-- 1. Disable foreign key checks to bypass error 1452 temporarily
SET foreign_key_checks = 0;

-- 2. Your insert statements
INSERT IGNORE INTO demand_forecasts (product_id, forecast_month, predicted_qty, confidence_level, method) VALUES 
(1, '2025-10-01', 12, 85.50, 'Moving Average'),
(2, '2025-10-01', 15, 82.00, 'Moving Average'),
(3, '2025-10-01', 8, 78.50, 'Moving Average'),
(16, '2025-10-01', 25, 88.00, 'Moving Average'),
(4, '2025-10-01', 6, 75.00, 'Moving Average'),
(5, '2025-10-01', 9, 81.00, 'Moving Average'),
(6, '2025-10-01', 11, 79.50, 'Moving Average'),
(7, '2025-10-01', 14, 83.00, 'Moving Average'),
(8, '2025-10-01', 10, 77.00, 'Moving Average'),
(9, '2025-10-01', 13, 80.50, 'Moving Average'),
(18, '2025-10-01', 16, 84.00, 'Moving Average'),
(11, '2025-10-01', 7, 76.50, 'Moving Average'),
(12, '2025-10-01', 9, 78.00, 'Moving Average'),
(13, '2025-10-01', 18, 85.00, 'Moving Average'),
(14, '2025-10-01', 5, 74.00, 'Moving Average'),
(15, '2025-10-01', 8, 79.00, 'Moving Average'),
(17, '2025-10-01', 22, 88.00, 'Moving Average'),
(18, '2025-10-01', 19, 82.50, 'Moving Average'),
(19, '2025-10-01', 27, 88.50, 'Moving Average'),
(20, '2025-10-01', 15, 81.50, 'Moving Average'),
(21, '2025-10-01', 28, 83.50, 'Moving Average'),
(22, '2025-10-01', 12, 80.00, 'Moving Average'),
(23, '2025-10-01', 14, 79.00, 'Moving Average'),
(24, '2025-10-01', 25, 87.00, 'Moving Average'),
(25, '2025-10-01', 11, 78.50, 'Moving Average');

-- 3. Re-enable foreign key checks to keep database integrity safe
SET foreign_key_checks = 1;