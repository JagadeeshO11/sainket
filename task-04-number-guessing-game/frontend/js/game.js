// Pure game logic — no DOM, no UI
const Game = (() => {
  let secret = 0;
  let attempts = 0;

  function init() {
    secret = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
  }

  function guess(number) {
    attempts++;
    if (number < secret)  return { result: 'low',     attempts };
    if (number > secret)  return { result: 'high',    attempts };
    return                       { result: 'correct', attempts };
  }

  function getAttempts() { return attempts; }

  return { init, guess, getAttempts };
})();
