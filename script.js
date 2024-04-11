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
    if (num2 === 0) {
      showErrorMessage();
    } else {
      return divideNumbers(num1, num2);
    }
};

const showErrorMessage = () => {
  errorMessage.classList.remove("hidden");
};

console.log(operate(4, "/", 2));
