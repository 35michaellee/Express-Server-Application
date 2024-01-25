const express = require('express');
const router = express.Router();
const posts = require('../Data/posts.js');
const users = require('../Data/users.js');

router.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: posts });
});

router.get('/:user', (req, res) => {
    const requestedUser = req.params.user;
    const filteredPosts = requestedUser
        ? posts.filter(post => post.user === requestedUser)
        : posts;
    res.render('index', { title: 'Hey', message: filteredPosts });
});

router.post('/', (req, res) => {
    console.log('Received POST request:', req.body);

    const userName = req.body.user;

    const userExists = users.some(user => user.name === userName);
    if (!userExists) {
        const error = 'User not found';
        return res.status(404).render('index', { title: 'Hey', message: posts, error });
    }

    const newPost = {
        user: userName,
        ...req.body,
    };

    posts.push(newPost);

    // If you prefer to respond with JSON, uncomment the next line
    // res.json(newPost);

    // If you prefer to render the index view, you can redirect to the posts route
    res.redirect('/posts');
});

router.delete('/:userName/:postIndex', (req, res) => {
    const userName = req.params.userName;
    const postIndex = req.params.postIndex;

    const userExists = users.some(user => user.name === userName);
    if (!userExists) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (postIndex >= 0 && postIndex < posts.length) {
        const deletedPost = posts.splice(postIndex, 1)[0];
        res.json({ message: 'Post deleted successfully', deletedPost });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

module.exports = router;