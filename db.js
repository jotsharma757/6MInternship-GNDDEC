// db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",       // your DB username
  host: "localhost",
  database: "postgres", // database name
  password: "jotsharma143",
  port: 5432
});

module.exports = pool;