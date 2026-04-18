const pool = require("./3db");

async function Sub() { 
    try {
        await pool.query("DROP TABLE IF EXISTS student CASCADE");
        await pool.query("DROP TABLE IF EXISTS teacher CASCADE");

        await pool.query(`
            CREATE TABLE student (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100) UNIQUE,
                age INT
            );
             CREATE TABLE teacher (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100) UNIQUE,
                age INT
            );
        `);

        const insertQuery = `
            INSERT INTO student (name, email,age) VALUES
             ('Alice', 'alice@gmail.com', 25), 
            ('Bob', 'bob@gmail.com', 30),
            ('Charlie', 'charlie@gmail.com', 35),
            ('David', 'david@gmail.com', 40);
            `;

        const insertQuery2 = `
            INSERT INTO teacher (name, email,age) VALUES
             ('Alisha', 'alisha@gmail.com', 45), 
            ('Bobby', 'bobby@gmail.com', 36),
            ('Charu', 'charu@gmail.com', 35),
            ('Dav', 'dav@gmail.com', 40);
            `;
        await pool.query(insertQuery);
        await pool.query(insertQuery2);
        console.log("✅ subqueries Table created");
    } catch (err) {
        console.error('Error creating student table:', err);
    }
}   

async function query(){
    const result = await pool.query(`
       
        SELECT student.name
        FROM student
        WHERE age <
        (SELECT AVG(age) 
        FROM teacher
        WHERE teacher.id = student.id);
    `);
    return result.rows;
} 
module.exports = { Sub, query };
