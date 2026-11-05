const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/api/categories', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM categories');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching categories:', err.message);
        res.status(500).send('Server Error');
    }
});


app.get('/api/products', async (req, res) => {
    try {
        const query = `
            SELECT product_id AS id, category_id, product_name AS name, description, 
                   unit_price AS price
            FROM products;
        `;
        const result = await pool.query(query);
        
        const formattedProducts = result.rows.map(item => ({
            id: item.id,
            categoryId: item.category_id || 1, 
            subTag: 'smartphones',
            name: item.name,
            description: item.description || 'No description available',
            price: Number(item.price),
            image: 'images/iphone15pro.png',
            stock: 15,
            sold: 0,
            dateAdded: '2026-10-19',
            sellerName: 'Official Store',
            rating: 4.8,
            reviewsCount: 20
        }));

        res.json(formattedProducts);
    } catch (err) {
        console.error('Error fetching products:', err.message);
        res.status(500).send('Server Error');
    }
});


app.get('/api/orders', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM orders ORDER BY order_date DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching orders:', err.message);
        res.status(500).send('Server Error');
    }
});


app.post('/api/orders', async (req, res) => {
    const { customer_id, shipping_address_id, total_amount } = req.body;
    try {
        const orderQuery = `
            INSERT INTO orders (customer_id, shipping_address_id, order_date, status, total_amount) 
            VALUES ($1, $2, CURRENT_DATE, 'Pending', $3) RETURNING *;
        `;
        const orderResult = await pool.query(orderQuery, [customer_id, shipping_address_id, total_amount]);
        const newOrder = orderResult.rows[0];

        res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
    } catch (err) {
        console.error('Error creating order:', err.message);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});