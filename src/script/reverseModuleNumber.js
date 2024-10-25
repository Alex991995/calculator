export function reverseModuleNumber(num) {
  const digit = Number(num);
  if (digit > 0) {
    return String('-' + digit);
  }
  return num.slice(1);
}
