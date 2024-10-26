import { MATH_OPERATOR } from './script/constant.js';
import {
  checkTheLastLetterIsComma,
  isZeroFirstLatter,
  replaceValidSign,
} from './script/helperFunctions.js';
import { reverseModuleNumber } from './script/reverseModuleNumber.js';
import { changeTheme } from './script/themeChanging.js';
import './style.css';

const checkbox = document.querySelector('.checkbox');

const input = document.querySelector('.input');
const display__keys = document.querySelectorAll('.display__key');
const cleaner = document.querySelector('.cleaner');
const reverseModule = document.querySelector('.reverseModule');
const compute = document.querySelector('.compute');

let firstNum = '';
let secondNum = '';
let sign = '';

checkbox.addEventListener('click', changeTheme);

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
  const isOperator = MATH_OPERATOR.includes(digit);

  const isFirstNumLastComma = checkTheLastLetterIsComma(firstNum, digit);
  const isSecondNumLastComma = checkTheLastLetterIsComma(secondNum, digit);

  const isFirstNumZero = isZeroFirstLatter(firstNum, digit);
  const isSecondNumZero = isZeroFirstLatter(secondNum, digit);

  if (digit !== '=' && digit !== '+/-' && isFirstNumLastComma && isFirstNumZero) {
    // записываю в первое число
    if (!isOperator && !sign) {
      input.value += digit;
      firstNum += digit;

      // записываю оператор
    } else if (isOperator && !sign) {
      input.value = digit;
      sign = digit;
    } else if (sign && isSecondNumLastComma && isSecondNumZero) {
      // дозаписываю во второе число
      if (secondNum && !isOperator) {
        secondNum += digit;
        input.value += digit;
      } else {
        input.value = '';
        // если оператор есть записываю во второе число
        if (!isOperator) {
          secondNum += digit;
          // перезаписваю оператор
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
