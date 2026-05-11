# Task 02 — Weather API Fetch & Display

## Stack
- Frontend: HTML + CSS + JS
- Backend: Node.js + Express (API proxy — hides key from browser)
- No Database

## Setup
1. Get free key at https://www.weatherapi.com/
2. Paste key in `backend/services/weatherService.js`

## Structure
```
frontend/
├── index.html         → Search UI
├── css/style.css      → Styling
├── js/api.js          → Calls backend API
└── js/app.js          → Renders weather data

backend/
├── server.js          → Express entry point
├── routes/            → weatherRoutes.js
├── controllers/       → weatherController.js
└── services/          → weatherService.js (WeatherAPI.com call)
```

## Run
```bash
npm install
npm run dev
# Then open frontend/index.html in browser
```

## API Endpoint
GET `http://localhost:3002/api/weather?city=London`

## Deploy
- Frontend → Netlify
- Backend → Render (API key stays secure on server)
