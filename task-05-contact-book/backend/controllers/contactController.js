const connectDB = require('../services/db');
const Contact = require('../models/Contact');

const getAll = async (req, res) => {
  try {
    await connectDB();
    const { search } = req.query;
    const filter = search ? { name: { $regex: search, $options: 'i' } } : {};
    const contacts = await Contact.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const create = async (req, res) => {
  try {
    await connectDB();
    const { name, phone, email } = req.body;
    if (!name || !phone || !email)
      return res.status(400).json({ success: false, message: 'All fields are required' });
    const contact = await Contact.create({ name, phone, email });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await connectDB();
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' });
    res.json({ success: true, message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getAll, create, remove };
