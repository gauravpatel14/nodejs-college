const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const { name, course } = req.query;

    if (name && course) {
        res.send(`Name: ${name}<br>Course: ${course}`);
    } else {
        res.send('No search data provided.');
    }
});

app.listen(3000, () => console.log('Assignment 2 running on port 3000'));