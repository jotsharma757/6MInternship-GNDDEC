const {pool} = require("../config/db");

async function createUserTable() {
    try {
        await pool.query(`
  CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  ip_address VARCHAR(50),
  login_attempts INT DEFAULT 0,
  login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  reset_token VARCHAR(255),          -- ✅ correct
  reset_token_expiry TIMESTAMP       -- ✅ correct
);`)
        console.log("Users table is ready ✅");
    } catch (err) {
        console.error("Error connecting to PostgreSQL", err);
    }
}

//CREATE USER
const createUser = async (name, email, password, role, ip) => {
    const result = await pool.query(
        `INSERT INTO users (name, email, password, role, ip_address)
        VALUES ($1, $2, $3,$4, $5) RETURNING *`,
        [name, email, password, role, ip]
    );
    return result.rows[0];
};

//FIND USER
const findUserByEmail = async (email) => {
    const result = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );
    return result.rows[0];
};

//UPdate Success Login
const updateLogin = async (id) => {
    await pool.query(
        `UPDATE users 
        SET login_time = CURRENT_TIMESTAMP,
        login_attempts = 0
         WHERE id = $1`,

        [id]
    );
};
// INCREASE FAILED LOGIN
const increaseAttempts = async (id) => {
    await pool.query(
        `UPDATE users 
     SET login_attempts = login_attempts + 1
     WHERE id=$1`,
        [id]
    );
};

// RESET PASSWORD
const resetPassword = async (email, newPassword) => {
    const result = await pool.query(
        `UPDATE users 
     SET password = $1 
     WHERE email = $2 
     RETURNING *`,
        [newPassword, email]
    );

    return result.rows[0];
};

module.exports = {
    createUserTable,
    createUser,
    findUserByEmail,
    updateLogin,
    increaseAttempts,
    resetPassword
};
