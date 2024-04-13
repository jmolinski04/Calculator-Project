const errorMessage = document.querySelector(".error-msg");
const addNumbers = (a, b) => a + b;
const subtractNumbers = (a, b) => a - b;
const multiplyNumbers = (a, b) => a * b;
const divideNumbers = (a, b) => a / b;

const operate = (num1, operator, num2) => {
  if (operator === "+") return addNumbers(num1, num2);
  if (operator === "-") return subtractNumbers(num1, num2);
  if (operator === "*") return multiplyNumbers(num1, num2);
  if (operator === "/")
    return num2 === 0
      ? (errorMessage.innerText = "Can't divide by 0")
      : divideNumbers(num1, num2);

  //   return (errorMessage.innerText = "Can't divide by 0");
  // } else {
  //   return divideNumbers(num1, num2);
  // }
};
operate(4, "/", 2);
