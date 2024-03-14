const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET request
app.get('/', (req, res) => {
  res.send('This is a GET request');
});

// POST request
app.post('/', (req, res) => {
  res.send('This is a POST request');
});

// PUT request
app.put('/', (req, res) => {
  res.send('This is a PUT request');
});

// DELETE request
app.delete('/', (req, res) => {
  res.send('This is a DELETE request');
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});