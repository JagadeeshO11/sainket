const mongoose = require('mongoose');

// ─── FILL IN YOUR MONGODB URI ──────────────────────────────────────────────
const MONGO_URI = 'YOUR_MONGODB_CONNECTION_STRING';
// Local:  mongodb://localhost:27017/contactbook
// Atlas:  mongodb+srv://<user>:<password>@cluster.mongodb.net/contactbook
// ──────────────────────────────────────────────────────────────────────────

async function connectDB() {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB connected');
}

module.exports = connectDB;
