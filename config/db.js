<<<<<<< HEAD
 
const { Pool } = require("pg");
require("dotenv").config();
console.log("DB URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
 
});

=======
 
const { Pool } = require("pg");
require("dotenv").config();
console.log("DB URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
 
});

>>>>>>> a583e49a6e4d2c4a996b7976906f06c9e7222f89
module.exports = { pool };