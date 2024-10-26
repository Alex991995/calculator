export function reverseModuleNumber(num) {
  const numeric = String(num).replace(',', '.');
  const digit = Number(numeric);
  if (digit > 0) {
    return String('-' + num);
  }

  return String(num).slice(1);
}
