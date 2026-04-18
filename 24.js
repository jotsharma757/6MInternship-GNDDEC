//if
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}

let number = -5;
//if-else
if (number > 0) {
  console.log("Positive number");
} else {
  console.log("Negative number");
}

//if-else-if
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}



do {
  console.log(i);
  i++;
} while (i <= 5);

//switch
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day");
}
