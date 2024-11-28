// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files if needed
app.use(express.static('public'));

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
