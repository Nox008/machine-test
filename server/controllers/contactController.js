const Contact = require('../models/Contact');

// Submit a contact form
exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};