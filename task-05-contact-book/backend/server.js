require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./services/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/contacts', contactRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'contact-book' }));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Connect DB then start — local dev only
connectDB()
  .then(() => {
    if (process.env.NODE_ENV !== 'production') {
      const PORT = process.env.PORT || 3005;
      app.listen(PORT, () => console.log(`Contact Book Server running on http://localhost:${PORT}`));
    }
  })
  .catch(err => {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  });

module.exports = app;
