# Task 05 — Contact Book

## Stack
- Frontend: HTML + CSS + JS
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)

## Setup
1. Paste your MongoDB URI in `backend/services/db.js`
   - Local: `mongodb://localhost:27017/contactbook`
   - Atlas: `mongodb+srv://<user>:<pass>@cluster.mongodb.net/contactbook`

## Structure
```
frontend/
├── index.html         → Contact Book UI
├── css/style.css      → Styling
├── js/api.js          → All fetch calls to backend
└── js/app.js          → Render, validate, events

backend/
├── server.js          → Express + MongoDB connect
├── routes/            → contactRoutes.js
├── controllers/       → contactController.js
├── models/            → Contact.js (Mongoose schema)
└── services/          → db.js (MongoDB connection)

database/
└── schema.js          → MongoDB schema reference
```

## Run
```bash
npm install
npm run dev
# Then open frontend/index.html in browser
```

## API Endpoints
- GET    `/api/contacts?search=name` → Get all / search by name
- POST   `/api/contacts`             → Add `{ name, phone, email }`
- DELETE `/api/contacts/:id`         → Delete by MongoDB _id

## Deploy
- Frontend → Netlify
- Backend  → Render
- Database → MongoDB Atlas (free tier)
