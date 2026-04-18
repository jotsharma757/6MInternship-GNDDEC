const { pool } = require("../config/db");

async function Mylist() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Mylist(
        id SERIAL PRIMARY KEY,   
        user_id INT,  -- ✅ added
        title VARCHAR(255),
        image VARCHAR(500) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Mylist table is ready");
  } catch (err) {
    console.error(err);
  }
}

// ✅ GET (user specific)
const getMylist = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM Mylist WHERE user_id = $1 ORDER BY id DESC",
    [userId]
  );
  return result.rows;
};

// ✅ INSERT (user specific)
const insertMylist = async (userId, title, image) => {
  const existing = await pool.query(
    "SELECT * FROM Mylist WHERE title = $1 AND user_id = $2",
    [title, userId]
  );

  if (existing.rows.length > 0) {
    return existing.rows[0]; // ✅ return existing
  }

  const result = await pool.query(
    "INSERT INTO Mylist (user_id, title, image) VALUES ($1, $2, $3) RETURNING *",
    [userId, title, image]
  );

  return result.rows[0]; // ✅ VERY IMPORTANT
};

module.exports = {
  Mylist,
  getMylist,
  insertMylist,
};