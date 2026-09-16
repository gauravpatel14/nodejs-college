const express = require('express');
const app = express();

app.get('/student/:id', (req, res) => {
    const studentId = req.params.id;
    const { name, course } = req.query;

    let responseText = `Student ID: ${studentId}`;
    
    if (name) responseText += `<br>Name: ${name}`;
    if (course) responseText += `<br>Course: ${course}`;

    res.send(responseText);
});

app.listen(3000, () => console.log('Assignment 3 running on port 3000'));