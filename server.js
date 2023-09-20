// Import required modules
const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Add CORS middleware

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Create a database connection
const db = mysql.createConnection({
  host: 'localhost',        // Change this to your MySQL host
  user: 'your_username',    // Change this to your MySQL username
  password: 'your_password',  // Change this to your MySQL password
  database: 'your_database_name',  // Change this to your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.message);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define API routes for MySQL operations
// Example route for retrieving data from MySQL
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM your_table_name'; // Change 'your_table_name' to your actual table name

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Database query error: ' + err.message);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
});

// Continue with your existing routes, middleware, and configuration
// ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
