const express = require('express');
const bcrypt = require('bcrypt');
const Teacher = require('../model/teacherModel.js');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, subject } = req.body;

        if (!name || !email || !password || !subject) {
            return res.status(400).json({ error: 'All teacher fields (name, email, password, subject) are required' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newTeacher = new Teacher({ 
            name, 
            email, 
            password: hashedPassword, 
            subject 
        });
        
        await newTeacher.save();
        res.status(201).json({ message: 'Teacher registered successfully' });

    } catch (error) {
        res.status(500).json({ error: 'Registration failed', details: error.message });
    }
});

module.exports = router;