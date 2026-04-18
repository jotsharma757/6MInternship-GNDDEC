const { pool } = require("../config/db");

// create table
async function connectDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS movies (
        id SERIAL PRIMARY KEY,
         user_id INT, 
        title VARCHAR(255) UNIQUE,
        image VARCHAR(500) NOT NULL,
        category VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Movies table is ready ✅");
  } catch (err) {
    console.error(err);
  }
}

// get by category
const getMoviesByCategory = async (category) => {
  const result = await pool.query(
    "SELECT * FROM movies WHERE category=$1",
    [category]
  );
  return result.rows;
};

// insert
const insertMovie = async (title, image, category) => {
  await pool.query(
    `INSERT INTO movies (title, image, category)
     VALUES ($1, $2, $3)
     ON CONFLICT (title) DO NOTHING`,
    [title, image, category]
  );
};

module.exports = { connectDB, getMoviesByCategory, insertMovie };