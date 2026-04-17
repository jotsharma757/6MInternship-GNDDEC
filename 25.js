//For-Loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//while
let j = 1;

while (j <= 5) {
  console.log(i);
  j++;
}

let i = 6;

do {
  console.log(i);
  i++;
} while (i <= 5);


//for-of loop
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

//for-in loop
let student = {
  name: "Rahul",
  age: 20,
  course: "JS"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}
//array.for each loop
let nums = [10, 20, 30];

nums.forEach(function(num) {
  console.log(num);
});

