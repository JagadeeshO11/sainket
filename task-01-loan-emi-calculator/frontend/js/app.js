document.getElementById('calculateBtn').addEventListener('click', () => {
  const P = parseFloat(document.getElementById('principal').value);
  const R = parseFloat(document.getElementById('rate').value);
  const N = parseInt(document.getElementById('tenure').value);

  const errorEl = document.getElementById('errorMsg');
  const resultEl = document.getElementById('result');

  const error = validate(P, R, N);
  if (error) {
    errorEl.textContent = error;
    errorEl.classList.remove('hidden');
    resultEl.classList.add('hidden');
    return;
  }

  errorEl.classList.add('hidden');

  const emi = calculateEMI(P, R, N);
  const totalPayment = emi * N;
  const totalInterest = totalPayment - P;

  document.getElementById('emiValue').textContent = formatCurrency(emi);
  document.getElementById('totalPayment').textContent = formatCurrency(totalPayment);
  document.getElementById('totalInterest').textContent = formatCurrency(totalInterest);
  resultEl.classList.remove('hidden');
});
