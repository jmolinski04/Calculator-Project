const errorMessage = document.querySelector(".error-msg");
const result = document.querySelector(".result");
const operatorButtons = document.querySelectorAll(".btn-operator");
const numberButtons = document.querySelectorAll(".btn-number");
const clearButton = document.querySelector(".clear-btn");

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

const displayNumbers = () => {
  const numberLimit = 9;
  let count = 0;
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (count < numberLimit) {
        result.innerHTML += button.value;
        count++;
      }
    });
  });
};
displayNumbers();

clearButton.addEventListener("click", () => {
  result.textContent = "";
  displayNumbers();
});

// result.textContent = operate(4, "/", 3);
