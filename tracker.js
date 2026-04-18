const pool = require("./db");

// Create tables if they don't exist
async function createTables() {
    const client = await pool.connect();
    try {
        await client.query("DROP TABLE IF EXISTS users CASCADE");
        await client.query("DROP TABLE IF EXISTS expenses CASCADE");
        await client.query("BEGIN");

        // Users table
        await client.query(`
      CREATE TABLE  users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL
      )
    `);

        // Expenses table
        await client.query(`
      CREATE TABLE expenses (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        amount NUMERIC(10,2) NOT NULL,
        description VARCHAR(100),
        expense_date DATE DEFAULT CURRENT_DATE
      )
    `);

        await client.query("COMMIT");
        console.log("Tables created!");
    } catch (err) {
        await client.query("ROLLBACK");
        console.error("Error creating tables:", err.message);
    } finally {
        client.release();
    }
}

// Insert user and their expense
async function addUserWithExpense(name, amount, description) {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");

        const userResult = await client.query(
            "INSERT INTO users(name) VALUES($1) RETURNING id",
            [name]
        );
        const userId = userResult.rows[0].id;

        await client.query(
            "INSERT INTO expenses(user_id, amount, description) VALUES($1, $2, $3)",
            [userId, amount, description] // only 3 values
        );

        await client.query("COMMIT");
        console.log(`User "${name}" and expense added successfully!`);
    } catch (err) {
        await client.query("ROLLBACK");
        console.error("Error:", err.message);
    } finally {
        client.release();
    }
}

module.exports = { addUserWithExpense, createTables };