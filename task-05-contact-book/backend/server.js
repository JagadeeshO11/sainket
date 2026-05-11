const express = require('express');
const cors = require('cors');
const connectDB = require('./services/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Contact Book Server running on http://localhost:${PORT}`));
}).catch(err => {
  console.error('DB connection failed:', err.message);
  process.exit(1);
});
