let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

Array.from(buttons).forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML;
    value=value.toLowerCase()
    console.log(value);
    
    if (value === "=") {
      let operators;
      let result;

      if(string.includes("+")){
        operators="+";
      }else if(string.includes("-")){
        operators = "-";
      }else if(string.includes("*")){
        operators = "*";
      }else if(string.includes("/")){
        operators = "/";
      }else if(string.includes("%")){
        operators = "%";
      }
      let operand = string.split(operators);
      let num1 = Number(operand[0]);
      let num2 = Number(operand[1]);

      if(operators === "+"){
        result = num1+num2;
      }else if (operators === "-"){
        result = num1-num2;
      }else if (operators === "*"){
        result = num1*num2;
      }else if (operators === "/"){
        result = num1/num2;
      }else if (operators === "%"){
        result = num1%num2;
      }
      string = result.toString();
      input.value =string;
    }
    else if(value === "ac"){
      string = "";
      input.value = string;
    }else if(value === "del"){
      string = string.slice(0,-1);
      input.value = string;
    }
    else{
      string += value;
      input.value = string;
    }
  
    });
  });
  
    