require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/weather', weatherRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'weather-api' }));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Local dev only — Vercel uses module.exports
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => console.log(`Weather Server running on http://localhost:${PORT}`));
}

module.exports = app;
