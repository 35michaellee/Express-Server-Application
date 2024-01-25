// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../Data/users');

// Define routes for user-related operations

// Get all users
router.get('/', (req, res) => {
    res.json(users);
  });
  
  // Add a new user
  router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(newUser);
  });
    // PATCH route to update an existing user


  // Find the user by name and update their data
  //curl -X PATCH -H "Content-Type: application/json" -d '{"birthday": "3/16/1994"}' http://localhost:3000/users/michael
  // PATCH route to update an existing user
router.patch('/:userName', (req, res) => {
  const userName = req.params.userName; // Corrected variable name to userName
  const updatedUserData = req.body;

  // Find the user by name and update their data
  const userIndex = users.findIndex(user => user.name === userName);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUserData };
    console.log( users[userIndex])
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;