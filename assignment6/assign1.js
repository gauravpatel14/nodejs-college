const express = require('express');
const app = express();
const router = express.Router();

const routerLogger = (req, res, next) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    console.log(`${req.method} ${req.originalUrl} ${now}`);
    next();
};

router.use(routerLogger);

router.get('/students', (req, res) => res.send('Students List'));
router.get('/courses', (req, res) => res.send('Courses List'));
router.get('/faculty', (req, res) => res.send('Faculty List'));

app.use('/api', router);

app.listen(6000, () => console.log('Assignment 1 running on port 6000'));

