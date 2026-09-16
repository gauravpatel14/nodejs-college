const express = require('express');
const userRouter = require('./router/userRouter.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});