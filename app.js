const express = require('express');

const loggerMiddleware = require('./Middleware/loggerMiddleware');
const authMiddleware = require('./Middleware/authMiddleware');
const bodyParser = require('body-parser');

const usersRoutes = require('./Routes/users');
const postsRoutes = require('./Routes/posts');
const commentsRoutes = require('./Routes/comments');


const app = express();

const port = 3000;
//set up engine 
app.set('view engine', 'pug');
app.set('views', __dirname);

// Middleware
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// Define a route that uses the authentication middleware
// app.get('/secure-route', authMiddleware, (req, res) => {
//   res.send('This is a secure route');
// });

// Routes
app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});