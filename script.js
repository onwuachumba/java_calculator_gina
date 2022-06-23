// program for a simple calculator

// take the operator input
while(true){
const operator = prompt('Enter operator ( either +, -, * or / )or any other key to exit: ');
  re = /[+ - * \/]+/
  if(re.test(operator)){

      // take the operand input
      const number1 = parseFloat(prompt('Enter first number: '));
      const number2 = parseFloat(prompt('Enter second number: '));
      
      let result;
      
      // using if...else if... else
      if (operator == '+') {
          result = number1 + number2;
          alert(result);
        }
        else if (operator == '-') {
            result = number1 - number2;
            alert(result);
        }
        else if (operator == '*') {
            result = number1 * number2;
            alert(result);
        }
        else if(operator =="/") {
            result = number1 / number2;
            alert(result);
        }
        else{
            alert("not a valid operator")
            break;
        }
        
    }else{
        alert("Not valid input");
        break;
    }
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);