-- =====================================================
-- 2. SAMPLE DATA
-- =====================================================

INSERT INTO categories (category_name, description) VALUES
('Electronics', 'Phones, laptops, gadgets'),
('Home Appliances', 'Kitchen and home devices'),
('Fashion', 'Clothing and accessories'),
('Novelty & Gag Gifts', 'Funny and unusual items'),
('Adult Toys', 'Adult wellness products'),
('Computer Accessories', 'Peripherals and accessories'),
('Audio & Video', 'Headphones, speakers, cameras');

INSERT INTO suppliers (supplier_name, contact_email, phone) VALUES
('TechGlobal Inc.', 'sales@techglobal.com', '+63-2-8888-1111'),
('HomeEssentials Ltd.', 'orders@homeessentials.ph', '+63-2-8888-2222'),
('FashionHub Co.', 'info@fashionhub.ph', '+63-2-8888-3333'),
('GadgetWorld PH', 'support@gadgetworld.ph', '+63-2-8888-4444');

INSERT INTO warehouses (warehouse_name, location) VALUES
('Main Warehouse Manila', 'Manila'),
('Cebu Distribution Center', 'Cebu City'),
('Davao Storage Hub', 'Davao City');

-- 80 Products
INSERT INTO products (product_name, description, category_id, supplier_id, unit_price, sku) VALUES
-- Electronics (1-20)
('iPhone 15 Pro', 'Apple iPhone 15 Pro 256GB', 1, 1, 65990.00, 'IP15P-256'),
('Samsung Galaxy S24', 'Samsung Galaxy S24 256GB', 1, 1, 54990.00, 'SGS24-256'),
('MacBook Air M3', 'Apple MacBook Air 13 M3', 1, 1, 72990.00, 'MBA-M3'),
('Gaming Laptop RTX 4060', '15.6" Gaming Laptop RTX 4060', 1, 1, 68990.00, 'GL-RTX4060'),
('iPad Air', 'iPad Air 11-inch M2', 1, 1, 38990.00, 'IPAD-AIR-M2'),
('Google Pixel 9', 'Google Pixel 9 128GB', 1, 1, 42990.00, 'PIX9-128'),
('Xiaomi 14T', 'Xiaomi 14T 256GB', 1, 1, 24990.00, 'XIA14T-256'),
('OPPO Reno12', 'OPPO Reno12 256GB', 1, 1, 21990.00, 'OPPO-R12'),
('vivo V40', 'vivo V40 256GB', 1, 1, 19990.00, 'VIVO-V40'),
('realme 13 Pro', 'realme 13 Pro 256GB', 1, 1, 17990.00, 'REAL-13PRO'),
('OnePlus 12', 'OnePlus 12 256GB', 1, 1, 39990.00, 'OP12-256'),
('Huawei Pura 70', 'Huawei Pura 70 256GB', 1, 1, 35990.00, 'HUA-PURA70'),
('Infinix Note 40', 'Infinix Note 40 256GB', 1, 1, 11990.00, 'INF-NOTE40'),
('Desktop PC Ryzen 5', 'Ryzen 5 / 16GB / 512GB Desktop', 1, 1, 28990.00, 'DESK-R5'),
('27-inch Monitor', '27-inch 144Hz IPS Monitor', 1, 1, 12990.00, 'MON-27-144'),
('Wireless Earbuds Pro', 'True wireless earbuds', 1, 1, 2999.00, 'WE-PRO'),
('Bluetooth Speaker', 'Portable waterproof speaker', 1, 1, 2499.00, 'BT-SPEAK'),
('Smartwatch Fit', 'Fitness smartwatch', 1, 1, 4990.00, 'SW-FIT'),
('Power Bank 20000mAh', 'Fast charging power bank', 1, 1, 1499.00, 'PB-20K'),
('Wi-Fi 6 Router', 'AX3000 Wi-Fi 6 Router', 1, 1, 3499.00, 'RTR-AX3000'),

-- Home Appliances (21-35)
('Air Fryer 5L', '5-liter digital air fryer', 2, 2, 3499.00, 'AF-5L'),
('Microwave 25L', '25L digital microwave', 2, 2, 4990.00, 'MW-25L'),
('Rice Cooker 1.8L', '1.8L multi-function rice cooker', 2, 2, 2499.00, 'RC-18L'),
('Electric Kettle', '1.7L stainless steel kettle', 2, 2, 1299.00, 'EK-17L'),
('Stand Fan 16inch', '16-inch stand fan with remote', 2, 2, 1899.00, 'FAN-16'),
('Robot Vacuum', 'Smart robot vacuum', 2, 2, 12990.00, 'RV-SMART'),
('Air Purifier HEPA', 'HEPA air purifier', 2, 2, 5990.00, 'AP-HEPA'),
('Blender High Speed', 'High-speed countertop blender', 2, 2, 3499.00, 'BL-HS'),
('Toaster 2-Slice', '2-slice stainless toaster', 2, 2, 1499.00, 'TO-2SL'),
('Coffee Maker Drip', 'Drip coffee maker', 2, 2, 2999.00, 'CM-DRIP'),
('Induction Cooker', 'Portable induction cooker', 2, 2, 3990.00, 'IC-PORT'),
('Steam Iron', 'Ceramic steam iron', 2, 2, 1799.00, 'SI-CER'),
('Hair Dryer Ionic', 'Ionic hair dryer', 2, 2, 1999.00, 'HD-ION'),
('Electric Toothbrush', 'Sonic electric toothbrush', 2, 2, 2499.00, 'ET-SONIC'),
('Mini Desktop Vacuum', 'USB mini vacuum', 2, 2, 699.00, 'MINI-VAC'),

-- Fashion (36-45)
('Men\'s Casual Shirt', 'Cotton casual shirt', 3, 3, 1299.00, 'SHIRT-MEN'),
('Women\'s Summer Dress', 'Light summer dress', 3, 3, 1899.00, 'DRESS-SUM'),
('Unisex Hoodie', 'Comfortable hoodie', 3, 3, 1599.00, 'HOODIE-UNI'),
('Denim Jeans', 'Classic denim jeans', 3, 3, 1799.00, 'JEANS-DEN'),
('Running Shoes', 'Lightweight running shoes', 3, 3, 2999.00, 'SHOES-RUN'),
('Leather Belt', 'Genuine leather belt', 3, 3, 899.00, 'BELT-LEA'),
('Canvas Backpack', 'Durable canvas backpack', 3, 3, 1499.00, 'BAG-CAN'),
('Baseball Cap', 'Adjustable baseball cap', 3, 3, 499.00, 'CAP-BASE'),
('Wool Scarf', 'Warm wool scarf', 3, 3, 799.00, 'SCARF-WOOL'),
('Sunglasses UV', 'UV protection sunglasses', 3, 3, 999.00, 'SUN-UV'),

-- Novelty & Gag (46-65)
('Banana Phone Handset', 'Banana-shaped phone handset', 4, 2, 499.00, 'NOV-BANANA'),
('Fake Poop Toy', 'Realistic fake poop toy', 4, 2, 149.00, 'NOV-POOP'),
('Screaming Goat Toy', 'Squeeze goat that screams', 4, 2, 299.00, 'NOV-GOAT'),
('Chicken Purse', 'Chicken-shaped purse', 4, 2, 899.00, 'NOV-CHICKEN'),
('Inflatable Middle Finger', 'Giant inflatable middle finger', 4, 2, 799.00, 'NOV-FINGER'),
('Human Face Socks', 'Socks with human face', 4, 2, 349.00, 'NOV-FACESOCK'),
('Pickle Pillow', 'Pickle-shaped pillow', 4, 2, 599.00, 'NOV-PICKLE'),
('Bread Slippers', 'Bread-shaped slippers', 4, 2, 449.00, 'NOV-BREAD'),
('Weird Face Mug', 'Mug with weird face', 4, 2, 399.00, 'NOV-FACEMUG'),
('Dino Toilet Brush', 'Dinosaur toilet brush', 4, 2, 549.00, 'NOV-DINO'),
('Rubber Chicken', 'Classic rubber chicken', 4, 2, 249.00, 'NOV-RUBCHICK'),
('Whoopee Cushion', 'Classic whoopee cushion', 4, 2, 149.00, 'NOV-WHOOPEE'),
('Fake Lottery Ticket', 'Pranking lottery ticket', 4, 2, 99.00, 'NOV-FAKELOTTO'),
('Invisible Ink Pen', 'Invisible ink pen set', 4, 2, 399.00, 'NOV-INVISIBLE'),
('Nose Pencil Sharpener', 'Nose-shaped sharpener', 4, 2, 199.00, 'NOV-NOSE'),
('Toilet Golf Set', 'Bathroom mini golf set', 4, 2, 599.00, 'NOV-TOILETGOLF'),
('Bacon Bandages', 'Bacon-printed bandages', 4, 2, 149.00, 'NOV-BACON'),
('Emergency Mustache Kit', 'Stick-on mustache kit', 4, 2, 249.00, 'NOV-MUSTACHE'),
('Yelling Goat Button', 'Yelling goat sound button', 4, 2, 349.00, 'NOV-YELLGOAT'),
('Potato Clock', 'Potato-powered clock', 4, 2, 499.00, 'NOV-POTATO'),

-- Adult Toys (66-75)
('Rabbit Vibrator', 'Dual stimulation vibrator', 5, 2, 2499.00, 'ADULT-RABBIT'),
('Bullet Vibrator', 'Compact bullet vibrator', 5, 2, 699.00, 'ADULT-BULLET'),
('Wand Massager', 'Powerful wand massager', 5, 2, 2999.00, 'ADULT-WAND'),
('Masturbation Sleeve', 'Male masturbation sleeve', 5, 2, 899.00, 'ADULT-SLEEVE'),
('Couples Vibrator', 'Vibrator for couples', 5, 2, 2799.00, 'ADULT-COUPLES'),
('Remote Vibrator', 'Remote controlled vibrator', 5, 2, 3499.00, 'ADULT-REMOTE'),
('Anal Beads', 'Silicone anal beads', 5, 2, 799.00, 'ADULT-BEADS'),
('Penis Ring', 'Vibrating penis ring', 5, 2, 599.00, 'ADULT-RING'),
('Prostate Massager', 'Ergonomic prostate massager', 5, 2, 1899.00, 'ADULT-PROSTATE'),
('Love Balls', 'Kegel exercise balls', 5, 2, 699.00, 'ADULT-LOVEBALLS'),

-- Computer Accessories & Audio (76-80)
('Mechanical Keyboard', 'RGB mechanical keyboard', 6, 1, 2499.00, 'KB-MECH'),
('Wireless Mouse', 'Ergonomic wireless mouse', 6, 1, 799.00, 'MOU-WIRE'),
('USB Microphone', 'USB condenser microphone', 7, 1, 2999.00, 'MIC-USB'),
('1080p Webcam', '1080p webcam with mic', 6, 1, 1499.00, 'WEB-1080'),
('Portable SSD 1TB', '1TB USB-C portable SSD', 6, 1, 4990.00, 'SSD-1TB');