export function replaceValidSign(expression, sign) {
  expression = expression.replace(',', '.');
  if (sign === '−') {
    return expression.replace('−', '-');
  } else if (sign === '\u00f7') {
    return expression.replace('\u00f7', '/');
  } else if (sign === '\u00D7') {
    return expression.replace('\u00D7', '*');
  }

  return expression;
}
