const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Landing page route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Landing Page with Login/Signup</title>
      <style>
        body, h1, p {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        body {
          line-height: 1.6;
          background: #f4f4f9;
          color: #333;
        }
        nav {
          background: #007bff;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }
        nav ul li {
          margin: 0 1rem;
        }
        nav ul li a {
          text-decoration: none;
          color: #fff;
          font-weight: bold;
        }
        nav ul li a:hover {
          text-decoration: underline;
        }
        .auth-buttons {
          display: flex;
          gap: 1rem;
        }
        .auth-buttons a {
          text-decoration: none;
          color: #007bff;
          background: #fff;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-weight: bold;
          transition: background 0.3s, color 0.3s;
        }
        .auth-buttons a:hover {
          background: #0056b3;
          color: #fff;
        }
        header {
          text-align: center;
          padding: 2rem 0;
          background: #007bff;
          color: #fff;
        }
        header h1 {
          margin-bottom: 0.5rem;
        }
        header p {
          font-size: 1.1rem;
        }
        .cta {
          background: #28a745;
          color: #fff;
          padding: 1rem 2rem;
          text-decoration: none;
          font-size: 1.2rem;
          border-radius: 5px;
          margin-top: 2rem;
          display: inline-block;
        }
        .cta:hover {
          background: #218838;
        }
      </style>
    </head>
    <body>
      <!-- Navigation Menu -->
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div class="auth-buttons">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      </nav>

      <!-- Header Section -->
      <header>
        <h1>Welcome to Our Landing Page</h1>
        <p>Discover amazing features and benefits with us!</p>
        <a href="/get-started" class="cta">Get Started</a>
      </header>
    </body>
    </html>
  `);
});

// Additional routes for menu links
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>Learn more about our amazing company.</p>');
});

app.get('/services', (req, res) => {
  res.send('<h1>Our Services</h1><p>Explore the services we offer to help you succeed.</p>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>Get in touch with us for more information.</p>');
});

app.get('/get-started', (req, res) => {
  res.send('<h1>Thank you for getting started!</h1>');
});

// Login and Signup routes
app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1><p>Enter your credentials to log in.</p>');
});

app.get('/signup', (req, res) => {
  res.send('<h1>Signup Page</h1><p>Create an account to get started.</p>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
