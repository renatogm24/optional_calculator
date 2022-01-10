const display = document.querySelector("#display");

let result = 0;
let num = "0";
let operator = "";

function press(numInput) {
  num += String(numInput);
  let number = parseFloat(num);
  num.includes(".") ? (display.innerHTML = num) : (display.innerHTML = number);
}

function setOP(operatorInput) {
  if (num !== "0") {
    operator = operatorInput;
    result = parseFloat(num);
    num = "0";
  } else {
    operator = operatorInput;
  }
}

function calculate() {
  let number = parseFloat(num);
  switch (operator) {
    case "+":
      result += number;
      break;
    case "-":
      result -= number;
      break;
    case "*":
      result = result * number;
      break;
    case "/":
      result = result / number;
      break;
    default:
      result = number;
      break;
  }
  let resultToPrint;
  result % 1 != 0
    ? (resultToPrint = result.toFixed(4))
    : (resultToPrint = result);
  display.innerHTML = resultToPrint;
  num = resultToPrint;
  operator = "";
}

function clr() {
  result = 0;
  num = "0";
  operator = "";
  display.innerHTML = num;
}
