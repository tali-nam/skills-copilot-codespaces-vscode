// Create web server

// Import express
const express = require('express');
const app = express();
const port = 3000;

// Import module
const comments = require('./comments');

// Set view engine
app.set('view engine', 'pug');

// Set static folder
app.use(express.static('public'));

// Set root route
app.get('/', (req, res) => {
    res.render('index', {
        comments: comments.getComments()
    });
});

// Set add comment route
app.get('/add-comment', (req, res) => {
    comments.addComment(req.query.comment);
    res.redirect('/');
});

// Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));