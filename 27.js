//Simple Function
function greet() {
  console.log("Hello World");
}

greet(); // calling the function

//Function with Parameters
function add(a, b) {
  console.log(a + b);
}

add(5, 3); // 8
//Function with Return Value
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result);

//Function Expression:- Function stored in a variable.
const sayHi = function () {
  console.log("Hi there!");
};

sayHi();

//Arrow Function:-Shorter syntax  
const square = (num) => {
  return num * num;
};

// one-line version
const square2 = num => num * num;

console.log(square(4));
console.log(square2(5));

//Default Parameters : Used when argument is missing.
function welcome(name = "Guest") {
  console.log("Welcome " + name);
}

welcome("Aman");
welcome(); // Guest
// Function Inside Function:- One function calling another.
function outer() {
  function inner() {
    console.log("Inside inner function");
  }
  inner();
}

outer();
//allback Function:- Function passed as an argument.
function greetUser(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log("Hello " + name);
}

greetUser("Ravi", sayHello);
