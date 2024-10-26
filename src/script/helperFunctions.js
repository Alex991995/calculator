export function replaceValidSign(expression, sign) {
  expression = expression.replace(',', '.');
  if (sign === '−') {
    const replacedExpression = expression.replace('−', '-');
    const res = replaceDoubleMinusToOnePlus(replacedExpression);
    return res;
  } else if (sign === '\u00f7') {
    return expression.replace('\u00f7', '/');
  } else if (sign === '\u00D7') {
    return expression.replace('\u00D7', '*');
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
