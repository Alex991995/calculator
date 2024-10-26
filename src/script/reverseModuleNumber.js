export function reverseModuleNumber(num) {
  const numeric = String(num);
  const digit = Number(numeric);
  if (digit > 0) {
    return String('-' + digit);
  }
  return numeric.slice(1);
}
