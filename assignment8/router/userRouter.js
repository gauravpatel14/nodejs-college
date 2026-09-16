const express = require('express');
const router = express.Router();
const User = require('../model/userModel.js');

router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ error: 'Failed to add user', details: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users', details: error.message });
    }
});

module.exports = router;