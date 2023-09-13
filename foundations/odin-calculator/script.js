// Initialize variables
let operand1 = '';
let operand2 = '';
let currentOperator = '';
let displayOperand1 = document.getElementById("operand-1");
let displayOperator = document.getElementById("operator");
let displayOperand2 = document.getElementById("operand-2");
let displayResult = document.getElementById("result");

// Function to handle button click
function handleButtonClick(event) {
  const dataInput = event.target.getAttribute("data-input");

  if (event.target.classList.contains("number-button")) {
    operand1 += dataInput;
    displayOperand1.textContent = operand1;
    displayResult.textContent = '';
  } else if (event.target.classList.contains("operator-button")) {
    operand2 = parseFloat(operand1);
    operand1 = '';
    currentOperator = dataInput;
    displayOperator.textContent = currentOperator;
    displayOperand1.textContent = operand1;
    displayOperand2.textContent = operand2;
  }
}

// Select all number and operator buttons
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");

// Add event listeners to all buttons
numberButtons.forEach(function(button) {
  button.addEventListener("click", handleButtonClick);
});

operatorButtons.forEach(function(button) {
  button.addEventListener("click", handleButtonClick);
});

// Handle equals button click
const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", function() {
  operand1 = parseFloat(operand1);
  doTheMath(currentOperator);
});

// Perform arithmetic operations
function doTheMath(operator) {
  switch (operator) {
    case "+":
      addNumbers(operand1, operand2);
      clear();
      break;
    case "-":
      subtractNumbers(operand2, operand1);
      clear();
      break;
    case "x":
      multiplyNumbers(operand1, operand2);
      clear();
      break;
    case "/":
      divideNumbers(operand2, operand1);
      clear();
      break;
    default:
      console.log("ERROR!");
  }
}

// Arithmetic operations
function addNumbers(a, b) {
  let result = a + b;
  displayResult.textContent = "Result: " + result;
}

function subtractNumbers(a, b) {
  let result = a - b;
  displayResult.textContent = "Result: " + result;
}

function multiplyNumbers(a, b) {
  let result = a * b;
  displayResult.textContent = "Result: " + result;
}

function divideNumbers(a, b) {
  if (b !== 0) {
    let result = a / b;
    displayResult.textContent = "Result: " + result;
  } else {
    displayResult.textContent = "Result: Error (Division by zero)";
  }
}

// Clear calculator
function clear() {
  operand1 = '';
  operand2 = '';
  currentOperator = '';
  displayOperand1.textContent = operand1;
  displayOperand2.textContent = operand2;
  displayOperator.textContent = currentOperator;
}

// Handle clear button click
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function() {
  clear();
  displayResult.textContent = '';
});