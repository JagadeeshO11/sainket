# 🚀 Sainket Internship Projects

> A collection of 5 internship tasks built with a professional microservices-style modular architecture. Each task is fully self-contained with its own frontend, backend (where needed), and database layer (where needed).

---

## 👨‍💻 Intern Details

| Field        | Details                        |
|--------------|--------------------------------|
| Name         | Jagadeesh Osuru                |
| Internship   | Sainket                        |
| Stack        | HTML · CSS · JS · Node.js · MongoDB |

---

## 📁 Project Structure

```
sainket/
├── task-01-loan-emi-calculator/     → Frontend only (HTML + CSS + JS)
├── task-02-weather-api/             → Frontend + Backend (WeatherAPI.com)
├── task-03-blog-app/                → Frontend only (LocalStorage)
├── task-04-number-guessing-game/    → Frontend only (HTML + CSS + JS)
├── task-05-contact-book/            → Frontend + Backend + MongoDB
└── README.md                        ← You are here
```

---

## 📋 Task Overview

### ✅ Task 01 — Loan EMI Calculator
| | |
|---|---|
| **Stack** | HTML + CSS + JS |
| **Objective** | Calculate monthly EMI using the standard formula |
| **Formula** | `EMI = P × R × (1+R)^N / ((1+R)^N - 1)` |
| **Features** | Principal / Rate / Tenure inputs, EMI + Total Payment + Total Interest output, input validation |
| **Run** | Open `task-01-loan-emi-calculator/frontend/index.html` in browser |

```
frontend/
├── index.html       → UI form
├── css/style.css    → Styling
├── js/emi.js        → EMI formula, validation, formatting (pure logic)
└── js/app.js        → DOM events and rendering
```

---

### ✅ Task 02 — Fetch Data from Weather API
| | |
|---|---|
| **Stack** | Frontend (HTML+CSS+JS) + Backend (Node.js + Express) |
| **API** | WeatherAPI.com (free) |
| **Objective** | Fetch and display live weather data for any city |
| **Features** | City search, temperature, humidity, wind speed, feels like, visibility |
| **Run** | `npm install && npm run dev` inside folder, then open `frontend/index.html` |

```
frontend/
├── index.html         → Search UI
├── css/style.css      → Styling
├── js/api.js          → Calls backend (keeps API key safe)
└── js/app.js          → Renders weather data

backend/
├── server.js          → Express entry point (port 3002)
├── routes/            → weatherRoutes.js
├── controllers/       → weatherController.js
└── services/          → weatherService.js (WeatherAPI.com call)
```

> 🔑 Add your API key in `backend/services/weatherService.js`
> Get free key → https://www.weatherapi.com/

---

### ✅ Task 03 — Simple Blog App with Local Storage
| | |
|---|---|
| **Stack** | HTML + CSS + JS + LocalStorage |
| **Objective** | Create, read, and delete blog posts stored in browser |
| **Features** | Add post (title + content), view all posts, delete post, data persists on refresh |
| **Run** | Open `task-03-blog-app/frontend/index.html` in browser |

```
frontend/
├── index.html         → Blog UI
├── css/style.css      → Styling
├── js/storage.js      → LocalStorage CRUD (getPosts, addPost, deletePost)
└── js/app.js          → DOM rendering and events
```

---

### ✅ Task 04 — Number Guessing Game
| | |
|---|---|
| **Stack** | HTML + CSS + JS |
| **Objective** | Guess a random number between 1–100 with hints |
| **Features** | Too High / Too Low hints, attempt counter, guess history, Play Again |
| **Run** | Open `task-04-number-guessing-game/frontend/index.html` in browser |

```
frontend/
├── index.html         → Game UI
├── css/style.css      → Styling
├── js/game.js         → Pure game logic (random number, guess evaluation)
└── js/app.js          → DOM events, rendering, history log
```

---

### ✅ Task 05 — Simple Contact Book
| | |
|---|---|
| **Stack** | Frontend (HTML+CSS+JS) + Backend (Node.js + Express) + MongoDB |
| **Objective** | Store, view, search, and delete contacts with MongoDB persistence |
| **Features** | Add contact, list all contacts, live search by name, delete contact, input validation |
| **Run** | Add MongoDB URI → `npm install && npm run dev`, then open `frontend/index.html` |

```
frontend/
├── index.html         → Contact Book UI
├── css/style.css      → Styling
├── js/api.js          → All fetch calls to backend REST API
└── js/app.js          → Render, validate, events

backend/
├── server.js          → Express + MongoDB connect (port 3005)
├── routes/            → contactRoutes.js
├── controllers/       → contactController.js
├── models/            → Contact.js (Mongoose schema)
└── services/          → db.js (MongoDB connection)

database/
└── schema.js          → MongoDB schema reference
```

> 🔑 Add your MongoDB URI in `backend/services/db.js`
> Local: `mongodb://localhost:27017/contactbook`
> Atlas: `mongodb+srv://<user>:<pass>@cluster.mongodb.net/contactbook`

---

## ⚡ Quick Start

| Task | Command | URL |
|------|---------|-----|
| Task 01 | Open `frontend/index.html` | — |
| Task 02 | `cd task-02-weather-api && npm install && npm run dev` | http://localhost:3002 |
| Task 03 | Open `frontend/index.html` | — |
| Task 04 | Open `frontend/index.html` | — |
| Task 05 | `cd task-05-contact-book && npm install && npm run dev` | http://localhost:3005 |

---

## 🛠 Tech Stack Summary

| Technology | Used In |
|------------|---------|
| HTML5 | All tasks |
| CSS3 | All tasks |
| JavaScript (ES6+) | All tasks |
| Node.js + Express | Task 02, Task 05 |
| MongoDB + Mongoose | Task 05 |
| LocalStorage | Task 03 |
| WeatherAPI.com | Task 02 |

---

## 🌐 Deployment Guide

| Layer | Service | Tasks |
|-------|---------|-------|
| Frontend | Netlify / Vercel | All tasks |
| Backend | Render / Railway | Task 02, Task 05 |
| Database | MongoDB Atlas (free) | Task 05 |

---

## 📌 Architecture Principles Applied

- **Separation of concerns** — logic, UI, and data layers are separate files
- **Modular JS** — `game.js` / `emi.js` / `storage.js` hold pure logic, `app.js` handles DOM
- **Service layer** — backend API calls isolated in `services/` folder
- **MVC pattern** — `routes → controllers → services/models` in backend tasks
- **Reusable functions** — validation, formatting, rendering are standalone functions
- **Clean error handling** — all user inputs validated, API errors caught and displayed

---

*Built as part of Sainket Internship Program*
