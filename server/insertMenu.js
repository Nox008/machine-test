const mongoose = require('mongoose');
const Menu = require('./models/Menu');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    insertMenuItems();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Insert menu items
const insertMenuItems = async () => {
  const menuItems = [
    {
      name: 'CINNAMON TOAST CRUNCH',
      description: 'Shrewball peanut butter whiskey, vanilla extract, Amaretto, Ballage, egg white, cinnamon',
      price: 16,
    },
    {
      name: 'BAR 42 MARY',
      description: 'Titus, tomato juice, wereestershire, ciderg salt, black pepper, tobacco, tulip loaded',
      price: 14,
    },
    {
      name: 'MOET SPIRITZ',
      description: 'Aperol, St Germain, betanical liquor, fresh lime juice, mini brut Noel copper',
      price: 20,
    },
  ];

  try {
    await Menu.insertMany(menuItems);
    console.log('Menu items inserted successfully!');
  } catch (error) {
    console.error('Error inserting menu items:', error);
  } finally {
    mongoose.connection.close();
  }
};