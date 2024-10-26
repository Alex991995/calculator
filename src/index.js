import { replaceValidSign } from './script/helperFunctions.js';
import { reverseModuleNumber } from './script/reverseModuleNumber.js';
import './style.css';

const input = document.querySelector('.input');
const display__keys = document.querySelectorAll('.display__key');
const cleaner = document.querySelector('.cleaner');
const reverseModule = document.querySelector('.reverseModule');
const compute = document.querySelector('.compute');

let firstNum = '';
let secondNum = '';
let sign = '';

for (let key of display__keys) {
  key.addEventListener('click', addToInput);
}

cleaner.addEventListener('click', cleanData);

reverseModule.addEventListener('click', function () {
  if (input.value == firstNum) {
    const res = reverseModuleNumber(firstNum);
    firstNum = res;
    input.value = res;
  } else {
    const res = reverseModuleNumber(secondNum);
    secondNum = res;
    input.value = res;
  }
});

compute.addEventListener('click', function () {
  if (firstNum && sign && secondNum) {
    const expression = firstNum + sign + secondNum;
    try {
      const newExpression = replaceValidSign(expression, sign);

      const resFn = Function('return ' + newExpression);
      let result = String(resFn());
      result = result.replace('.', ',');

      input.value = result;
      firstNum = result;
      secondNum = '';
      sign = '';
    } catch (err) {
      console.error(err);
      cleanData();
    }
  }
});

function addToInput() {
  const digit = this.textContent;
  let isNum = false;
  if (digit === ',') {
    isNum = true;
  } else {
    isNum = Number.isFinite(+digit);
  }

  if (digit !== '=' && digit !== '+/-') {
    if (isNum && !sign) {
      input.value += digit;
      firstNum += digit;
    } else if (!isNum && !sign) {
      input.value = digit;
      sign = digit;
    } else if (sign) {
      if (secondNum && isNum) {
        secondNum += digit;
        input.value += digit;
      } else {
        input.value = '';
        if (isNum) {
          secondNum += digit;
        } else {
          sign = digit;
        }
        input.value = digit;
      }
    }
  }
}

function cleanData() {
  input.value = '';
  firstNum = '';
  secondNum = '';
  sign = '';
}
