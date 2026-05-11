const Contact = require('../models/Contact');

const getAll = async (req, res) => {
  const { search } = req.query;
  const filter = search ? { name: { $regex: search, $options: 'i' } } : {};
  const contacts = await Contact.find(filter).sort({ createdAt: -1 });
  res.json({ success: true, data: contacts });
};

const create = async (req, res) => {
  const { name, phone, email } = req.body;
  if (!name || !phone || !email)
    return res.status(400).json({ success: false, message: 'All fields are required' });

  const contact = await Contact.create({ name, phone, email });
  res.status(201).json({ success: true, data: contact });
};

const remove = async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' });
  res.json({ success: true, message: 'Contact deleted' });
};

module.exports = { getAll, create, remove };
