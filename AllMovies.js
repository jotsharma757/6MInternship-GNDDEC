const { pool } = require("../config/db");
 


// create table
async function AllMovies() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS AllMovies (
      id SERIAL PRIMARY KEY,
        title VARCHAR(255) UNIQUE,
        image VARCHAR(500) NOT NULL,
        category VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("AllMovies table is ready ✅");
  } catch (err) {
    console.error(err);
  }
}

// get all
const getMovies = async () => {
  const result = await pool.query("SELECT * FROM AllMovies ORDER BY id");
  return result.rows;
};

// get by category
const getMoviesByCategory = async (category) => {
  const result = await pool.query("SELECT * FROM AllMovies WHERE LOWER(category) = LOWER($1)",
    [category]
  );
  return result.rows;
};

// insert
const insertAllMovie = async (title, image, category) => {
  // check if movie already exists
  const existing = await pool.query(
    "SELECT * FROM AllMovies WHERE title = $1",
    [title]
  );

  if (existing.rows.length > 0) {
    console.log("Movie already exists:", title);
    return;
  }

  // insert if not exists
  await pool.query(
    "INSERT INTO AllMovies (title, image, category) VALUES ($1, $2, $3)",
    [title, image, category]
  );
};

module.exports = {
  AllMovies,
  getMovies,
  getMoviesByCategory,
  insertAllMovie,
};