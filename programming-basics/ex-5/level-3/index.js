require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

function getEnvVar(variable, fallback) {
  const value = process.env[variable] || fallback;
  if (!process.env[variable]) {
    console.warn(`Warning: Missing environment variable: ${variable}. Using fallback: ${value}`);
  }
  return value;
}

const port = getEnvVar('PORT', 3000);
const dbPath = getEnvVar('DB_PATH', './database.db');
const dbUser = getEnvVar('DB_USER', 'root');
const dbPassword = getEnvVar('DB_PASSWORD', 'Password');  
const apiKey = getEnvVar('API_KEY', 'APIkey'); 

console.log(`Server is running on port: ${port}`);
console.log(`Database file path: ${dbPath}`);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Example database queries
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)");
  db.run("INSERT INTO users (id, name) VALUES (1, 'Varun Sai')");
  db.run("INSERT INTO users (id, name) VALUES (2, 'Kohli')");
  db.each("SELECT id, name FROM users", (err, row) => {
    if (err) {
      console.error('Error fetching data:', err.message);
    } else {
      console.log(`${row.id}: ${row.name}`);
    }
  });
});

console.log('Database user configured, but password is not logged for security reasons.');
