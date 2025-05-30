const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json());

let orders = []; // In-memory storage for demo
let chatMessages = []; // In-memory chat history

// Receive a new order
app.post('/order', (req, res) => {
  const order = { ...req.body, status: req.body.status || 'active' };
  orders.push(order);
  res.json({ success: true, message: 'Order received!' });
});

// Get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Update order status (confirm or reject)
app.post('/order-status', (req, res) => {
  const { index, status } = req.body;
  if (orders[index]) {
    orders[index].status = status;
    res.json({ success: true, message: 'Order status updated!' });
  } else {
    res.status(404).json({ success: false, message: 'Order not found.' });
  }
});

// --- Customer Care Chat Endpoints ---

// Receive user message
app.post('/send-message', (req, res) => {
  const { name, message } = req.body;
  chatMessages.push({ name, message, isAdmin: false, timestamp: new Date() });
  res.json({ success: true });
});

// Get all chat messages
app.get('/receive-messages', (req, res) => {
  res.json(chatMessages);
});

// Admin reply (optional)
app.post('/admin-reply', (req, res) => {
  const { reply } = req.body;
  chatMessages.push({ name: "Admin", reply, isAdmin: true, timestamp: new Date() });
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

