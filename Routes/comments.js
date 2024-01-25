// routes/comments.js
const express = require('express');
const router = express.Router();
const comments = require('../Data/comments');



// Get all comments
router.get('/', (req, res) => {
    res.json(comments);
  });
  
  // Add a new user
  router.post('/', (req, res) => {
    const newComment = req.body;
    users.push(newComment);
    res.json(newComment);
  });
  


module.exports = router;