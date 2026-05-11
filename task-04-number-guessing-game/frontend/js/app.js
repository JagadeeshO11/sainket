// UI logic — uses Game module from game.js
Game.init();

const guessInput  = document.getElementById('guessInput');
const guessBtn    = document.getElementById('guessBtn');
const feedback    = document.getElementById('feedback');
const winMsg      = document.getElementById('winMsg');
const historyList = document.getElementById('historyList');
const noHistory   = document.getElementById('noHistory');

function addHistory(number, result) {
  noHistory.classList.add('hidden');
  const icons = { high: '🔴 Too High', low: '🔵 Too Low', correct: '✅ Correct' };
  const li = document.createElement('li');
  li.textContent = `#${Game.getAttempts()} → ${number}  —  ${icons[result]}`;
  historyList.prepend(li);
}

guessBtn.addEventListener('click', () => {
  const val = parseInt(guessInput.value);

  if (!val || val < 1 || val > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.';
    feedback.className = 'feedback error';
    feedback.classList.remove('hidden');
    return;
  }

  const { result, attempts } = Game.guess(val);
  document.getElementById('attempts').textContent = attempts;
  addHistory(val, result);
  guessInput.value = '';

  if (result === 'correct') {
    feedback.classList.add('hidden');
    document.getElementById('finalAttempts').textContent = attempts;
    winMsg.classList.remove('hidden');
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else {
    feedback.textContent = result === 'high' ? '📉 Too High! Try a lower number.' : '📈 Too Low! Try a higher number.';
    feedback.className = `feedback ${result}`;
    feedback.classList.remove('hidden');
  }
});

document.getElementById('restartBtn').addEventListener('click', () => {
  Game.init();
  document.getElementById('attempts').textContent = '0';
  historyList.innerHTML = '';
  noHistory.classList.remove('hidden');
  feedback.classList.add('hidden');
  winMsg.classList.add('hidden');
  guessBtn.disabled = false;
  guessInput.disabled = false;
  guessInput.focus();
});

guessInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') guessBtn.click(); });
