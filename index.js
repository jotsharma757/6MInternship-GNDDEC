const pool = require("./db"); // 👈 This line is required to fix the error

async function getUsers() {
const result = await pool.query(`
 SELECT student1.name AS student1_name, student2.name AS student2_name
FROM student1 
JOIN student2 ON student1.age = student2.age;
`);
 return result.rows;

}

async function seedData() {
  try {
    // 1. Clear old table to reset columns
    await pool.query("DROP TABLE IF EXISTS student1 CASCADE;");
    await pool.query("DROP TABLE IF EXISTS student2 CASCADE;");

    // 2. Create the table with correct columns
    await pool.query(`
      CREATE TABLE student1 (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        age INT
      );
    `);
        await pool.query(`
      CREATE TABLE student2 (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        age INT
      );
    `);

    // 3. Insert 10 dummy rows
    const insertQuery = `
      INSERT INTO student1 (name, email, age) VALUES
      ('User 1', 'user1@example.com', 29),
      ('User 2', 'user2@example.com', 34),
      ('User 3', 'user3@example.com', 44),
      ('User 4', 'user4@example.com', 54)
    `;

    const insertQuery2 = `
      INSERT INTO student2 (name, email, age) VALUES
      ('User 5', 'user5@example.com', 44),    
      ('User 6', 'user6@example.com', 34),
      ('User 7', 'user7@example.com', 29),
      ('User 8', 'user8@example.com', 54),
      ('User 9', 'user9@example.com', 44),
      ('User 10', 'user10@example.com', 34)
    `;

    await pool.query(insertQuery);
    await pool.query(insertQuery2);

    console.log("✅ Table created");
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  }
}

module.exports = { getUsers, seedData };
