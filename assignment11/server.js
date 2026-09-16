const express = require('express');
const mongoose = require('mongoose');
const teacherRouter = require('./router/teacherRouter.js');
const studentRouter = require('./router/studentRouter.js');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/schoolDB')
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.error('MongoDB connection failed:', error.message));

app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});