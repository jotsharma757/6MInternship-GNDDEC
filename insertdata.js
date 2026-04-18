
// cli.js
const readline = require("readline");
const { addUserWithExpense } = require("./tracker");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  rl.question("Enter user name: ", (name) => {
    rl.question("Enter expense amount: ", (amount) => {
      rl.question("Enter expense description: ", async (description) => {
        await addUserWithExpense(name, parseFloat(amount), description);
        rl.close();
      });
    });
  });
}

main();


















// const { addUserWithExpense, createTables } = require("./tracker");

// async function run() {
  
//   await createTables();

   
//   await addUserWithExpense("Alice", 250, "Groceries");
//   await addUserWithExpense("Bob", 100, "Books");
//   await addUserWithExpense("Charlie", 500, "Rent");
//     await addUserWithExpense("A", 2150, "a");
//   await addUserWithExpense("f", 1020, "Bo");
//   await addUserWithExpense("Ch", 1500, "Re");

//   console.log("data inserted successfully!");
// }

// run();