export function lbtt(price) {
  const bands = [
    { level: 145000, tax: 0 },
    { level: 250000, tax: 0.02 },
    { level: 325000, tax: 0.05 },
    { level: 750000, tax: 0.1 },
    { level: Infinity, tax: 0.12 },
  ];

  let totalTax = 0;
  let prevLevel = 0;

  for (let band of bands) {

    if (price <= band.level) {
      totalTax += (price - prevLevel) * band.tax;
      return parseFloat(totalTax.toFixed(2));
    }

    totalTax += (band.level - prevLevel) * band.tax;
    prevLevel = band.level;
  }

  return totalTax;
}
