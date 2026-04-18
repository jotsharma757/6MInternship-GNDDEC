 
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "jotsharma143", // ⚠️ same password you set during install
  port: 5432,
});     
module.exports = pool;

