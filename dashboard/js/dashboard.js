const projects = [
  {
    id: 'task-01',
    num: 'Task 01',
    icon: '💰',
    title: 'Loan EMI Calculator',
    description: 'Calculate monthly EMI using the standard formula. Enter principal, interest rate, and tenure to get instant results.',
    stack: ['HTML', 'CSS', 'JS'],
    tag: 'Frontend Only',
    color: '#e94560',
    path: '../task-01-loan-emi-calculator/frontend/index.html',
  },
  {
    id: 'task-02',
    num: 'Task 02',
    icon: '🌤',
    title: 'Weather Dashboard',
    description: 'Fetch live weather data for any city using WeatherAPI.com. Shows temperature, humidity, wind speed, and more.',
    stack: ['HTML', 'CSS', 'JS', 'Node.js', 'Express'],
    tag: 'Frontend + Backend',
    color: '#00b4d8',
    path: '../task-02-weather-api/frontend/index.html',
  },
  {
    id: 'task-03',
    num: 'Task 03',
    icon: '📝',
    title: 'Simple Blog App',
    description: 'Create, read, and delete blog posts. All data persists in the browser using LocalStorage — no server needed.',
    stack: ['HTML', 'CSS', 'JS', 'LocalStorage'],
    tag: 'Frontend Only',
    color: '#2b6cb0',
    path: '../task-03-blog-app/frontend/index.html',
  },
  {
    id: 'task-04',
    num: 'Task 04',
    icon: '🎯',
    title: 'Number Guessing Game',
    description: 'Guess a random number between 1–100. Get Too High / Too Low hints, track your attempts, and play again.',
    stack: ['HTML', 'CSS', 'JS'],
    tag: 'Frontend Only',
    color: '#f6c90e',
    path: '../task-04-number-guessing-game/frontend/index.html',
  },
  {
    id: 'task-05',
    num: 'Task 05',
    icon: '📒',
    title: 'Contact Book',
    description: 'Store, view, search, and delete contacts with full MongoDB persistence. Live search by name with instant results.',
    stack: ['HTML', 'CSS', 'JS', 'Node.js', 'MongoDB'],
    tag: 'Full Stack',
    color: '#553c9a',
    path: '../task-05-contact-book/frontend/index.html',
  },
];

function buildCard(project) {
  const card = document.createElement('a');
  card.href = project.path;
  card.className = 'card';
  card.style.setProperty('--card-color', project.color);
  card.setAttribute('target', '_blank');

  card.innerHTML = `
    <div class="card-header">
      <span class="card-icon">${project.icon}</span>
      <span class="card-tag">${project.tag}</span>
    </div>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div class="card-stack">
      ${project.stack.map(s => `<span class="pill">${s}</span>`).join('')}
    </div>
    <div class="card-footer">
      <span class="task-num">${project.num}</span>
      <span class="launch-btn">Launch App</span>
    </div>
  `;

  return card;
}

const grid = document.getElementById('projectGrid');
projects.forEach(p => grid.appendChild(buildCard(p)));
