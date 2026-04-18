const pool = require("./db");

async function Data() {
    try {
        await pool.query("DROP TABLE IF EXISTS student CASCADE;");
        // await pool.query("DROP TABLE IF EXISTS customer CASCADE;");

        await pool.query(`
        CREATE TABLE student (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            age INT
        );
        `);

        // await pool.query(`
        //     CREATE TABLE customer (
        //     id SERIAL PRIMARY KEY,
        //     orders INT,
        //     age INT
        //     );
        //     `);

        const insertQuery = `
            INSERT INTO student (name, email, age) VALUES
            ('Alice', 'alice@gmail.com', 25), 
            ('Bob', 'bob@gmail.com', 30),
            ('Charlie', 'charlie@gmail.com', 35),
            ('David', 'david@gmail.com', 40);
            `;

        // const insertQuery2 = `
        //     INSERT INTO customer (orders, age) VALUES
        //     (1, 5), 
        //     (2, 3),
        //     (13, 25),
        //     (4, 50);
        //     `;

        await pool.query(insertQuery);
        // await pool.query(insertQuery2);

        console.log("✅ Table created");
    } catch (err) {
        console.error("Error seeding data:", err);
    }
}

async function users() {
    const result = await pool.query(`
    SELECT student.name AS studentName,student.email AS studentEmail 
    FROM student
    `);
    return result.rows;
}

module.exports = { Data };