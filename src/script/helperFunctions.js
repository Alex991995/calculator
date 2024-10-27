import { MATH_OPERATOR } from './constant.js';

export function replaceValidSign(expression, sign) {
  expression = expression.replace(/,/g, '.');
  if (sign === '−') {
    const replacedExpression = expression.replace('−', '-');
    const res = replaceDoubleMinusToOnePlus(replacedExpression);
    return res;
  } else if (sign === '\u00f7') {
    return expression.replace('\u00f7', '/');
  } else if (sign === '\u00D7') {
    return expression.replace('\u00D7', '*');
  } else if (sign === '%') {
    const [amount, percent] = expression.split('%');
    return ((percent * amount) / 100).toFixed(2);
  }
  return expression;
}

export function replaceDoubleMinusToOnePlus(expression) {
  const arr = expression.split('--');
  if (arr.length > 1) {
    arr.splice(1, 0, '+');
    return arr.join('');
  }
  return expression;
}

export function checkTheLastLetterIsComma(str, digit) {
  if (!str && digit == ',') return false;
  const isNum = Number.isFinite(+digit);
  if (str.endsWith(',') && !isNum) return false;
  return true;
}

export function isZeroFirstLatter(str, digit) {
  if (!str && digit == '0' && str.length < 1) return false;
  return true;
}

export function isMathOperatorFirstLatter(str, digit) {
  console.log(str);
  if (!str && MATH_OPERATOR.includes(digit) && str.length < 1) return false;
  return true;
}
