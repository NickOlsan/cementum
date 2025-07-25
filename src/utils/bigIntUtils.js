export function formatBigInt(value, decimals = 18) {
  if (typeof value !== 'bigint') return '0';
  const str = value.toString();
  if (str.length <= decimals) {
    const decimalPart = str.padStart(decimals, '0');
    return `0.${decimalPart}`.replace(/0+$/, '') || '0';
  }
  const integerPart = str.slice(0, -decimals);
  const decimalPart = str.slice(-decimals).replace(/0+$/, '');
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}