const errorMessage = document.querySelector(".error-msg");
const result = document.querySelector(".result");
const operatorButtons = document.querySelectorAll(".btn-operator");
const numberButtons = document.querySelectorAll(".btn-number");
const clearButton = document.querySelector(".clear-btn");
const equalsButton = document.querySelector(".btn-equals");
let firstNum = "";
let secondNum = "";
let operator = "";
result.value = 0;

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
};

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    // if there is no operator that means that i'm saving first number
    if (operator === "") {
      firstNum += numberButton.value;
      result.value = firstNum;
      // else i'm saving second number because if there is an operator it means that i have to operate on these two numbers
    } else {
      secondNum += numberButton.value;
      result.value = secondNum;
    }
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    if (e.target.value !== equalsButton.value) {
      operator = e.target.value;
      result.value = operator;
    } else {
      switch (operator) {
        case "+":
          result.value = operate(firstNum, operator, secondNum);
          break;
        case "-":
          console.log(operate(firstNum, "-", secondNum));
          break;
        case "*":
          console.log(operate(firstNum, "*", secondNum));
          break;

        case "/":
          console.log(operate(firstNum, "/", secondNum));
          break;
        default:
          break;
      }
    }
  });
});

clearButton.addEventListener("click", () => {
  result.innerHTML = "";
  location.reload();
});
