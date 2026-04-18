 
const { Pool } = require("pg");
require("dotenv").config();
console.log("DB URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
 
});

module.exports = { pool };