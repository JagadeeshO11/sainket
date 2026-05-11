// EMI Formula: EMI = P * R * (1+R)^N / ((1+R)^N - 1)
function calculateEMI(principal, annualRate, months) {
  const R = annualRate / 12 / 100;
  if (R === 0) return principal / months;
  const power = Math.pow(1 + R, months);
  return (principal * R * power) / (power - 1);
}

function formatCurrency(amount) {
  return '₹' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function validate(P, R, N) {
  if (!P || !R || !N) return 'All fields are required.';
  if (P <= 0) return 'Principal must be greater than 0.';
  if (R <= 0) return 'Interest rate must be greater than 0.';
  if (N <= 0 || !Number.isInteger(N)) return 'Tenure must be a positive whole number.';
  return null;
}
