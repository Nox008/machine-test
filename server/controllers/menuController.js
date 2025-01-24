const Menu = require('../models/Menu');

// Get all menu items
exports.getMenu = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};