
DROP DATABASE IF EXISTS ecommerce_forecasting;
CREATE DATABASE ecommerce_forecasting;
USE ecommerce_forecasting;

-- =====================================================
-- 1. TABLES (14 tables, 3NF)
-- =====================================================

CREATE TABLE categories (
    category_id     INT AUTO_INCREMENT PRIMARY KEY,
    category_name   VARCHAR(100) NOT NULL UNIQUE,
    description     TEXT,
    parent_id       INT NULL,
    FOREIGN KEY (parent_id) REFERENCES categories(category_id)
);

CREATE TABLE suppliers (
    supplier_id     INT AUTO_INCREMENT PRIMARY KEY,
    supplier_name   VARCHAR(150) NOT NULL,
    contact_email   VARCHAR(100),
    phone           VARCHAR(30),
    country         VARCHAR(50) DEFAULT 'Philippines'
);

CREATE TABLE products (
    product_id      INT AUTO_INCREMENT PRIMARY KEY,
    product_name    VARCHAR(150) NOT NULL,
    description     TEXT,
    category_id     INT NOT NULL,
    supplier_id     INT NOT NULL,
    unit_price      DECIMAL(10,2) NOT NULL,
    sku             VARCHAR(50) UNIQUE NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

CREATE TABLE customers (
    customer_id     INT AUTO_INCREMENT PRIMARY KEY,
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    email           VARCHAR(100) UNIQUE NOT NULL,
    phone           VARCHAR(30),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    address_id      INT AUTO_INCREMENT PRIMARY KEY,
    customer_id     INT NOT NULL,
    address_line    VARCHAR(200) NOT NULL,
    city            VARCHAR(100) NOT NULL,
    province        VARCHAR(100),
    postal_code     VARCHAR(20),
    is_default      BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE warehouses (
    warehouse_id    INT AUTO_INCREMENT PRIMARY KEY,
    warehouse_name  VARCHAR(100) NOT NULL,
    location        VARCHAR(150) NOT NULL
);

CREATE TABLE inventory (
    inventory_id        INT AUTO_INCREMENT PRIMARY KEY,
    product_id          INT NOT NULL,
    warehouse_id        INT NOT NULL,
    quantity_on_hand    INT NOT NULL DEFAULT 0,
    reorder_level       INT NOT NULL DEFAULT 10,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouses(warehouse_id),
    UNIQUE KEY uk_product_warehouse (product_id, warehouse_id)
);

CREATE TABLE orders (
    order_id                INT AUTO_INCREMENT PRIMARY KEY,
    customer_id             INT NOT NULL,
    shipping_address_id     INT,
    order_date              DATE NOT NULL,
    status                  ENUM('Pending','Processing','Shipped','Delivered','Cancelled') DEFAULT 'Pending',
    total_amount            DECIMAL(12,2) NOT NULL DEFAULT 0,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (shipping_address_id) REFERENCES addresses(address_id)
);

CREATE TABLE order_items (
    order_item_id   INT AUTO_INCREMENT PRIMARY KEY,
    order_id        INT NOT NULL,
    product_id      INT NOT NULL,
    quantity        INT NOT NULL,
    unit_price      DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE sales_history (
    sale_id         INT AUTO_INCREMENT PRIMARY KEY,
    product_id      INT NOT NULL,
    sale_date       DATE NOT NULL,
    quantity_sold   INT NOT NULL,
    revenue         DECIMAL(12,2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE product_reviews (
    review_id       INT AUTO_INCREMENT PRIMARY KEY,
    product_id      INT NOT NULL,
    customer_id     INT NOT NULL,
    rating          TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    review_text     TEXT,
    review_date     DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE demand_forecasts (
    forecast_id         INT AUTO_INCREMENT PRIMARY KEY,
    product_id          INT NOT NULL,
    forecast_month      DATE NOT NULL,
    predicted_qty       INT NOT NULL,
    confidence_level    DECIMAL(5,2) DEFAULT 80.00,
    method              VARCHAR(50) DEFAULT 'Moving Average',
    generated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    UNIQUE KEY uk_product_month (product_id, forecast_month)
);

CREATE TABLE employees (
    employee_id     INT AUTO_INCREMENT PRIMARY KEY,
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    role            VARCHAR(50) NOT NULL,
    email           VARCHAR(100) UNIQUE
);

CREATE TABLE audit_log (
    log_id          INT AUTO_INCREMENT PRIMARY KEY,
    table_name      VARCHAR(50),
    action_type     VARCHAR(20),
    record_id       INT,
    action_time     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes           TEXT
);