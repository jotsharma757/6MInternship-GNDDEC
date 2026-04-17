console.log(a); // undefined
var a = 10;
console.log(a); // 10


console.log(b); // ReferenceError
let b = 20;

console.log(c); // ReferenceError
const c = 30;


{
  console.log(x); // undefined
  var x = 1;

  // console.log(y); // ReferenceError
  let y = 2;

  // console.log(z); // ReferenceError
  const z = 3;
}

hello(); // works

function hello() {
  console.log("Hello");
}
