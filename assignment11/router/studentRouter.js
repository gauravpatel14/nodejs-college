const express = require('express');
const bcrypt = require('bcrypt');
const Student = require('../model/studentModel.js');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, course, age } = req.body;

        if (!name || !email || !password || !course || !age) {
            return res.status(400).json({ error: 'All student fields (name, email, password, course, age) are required' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newStudent = new Student({ 
            name, 
            email, 
            password: hashedPassword, 
            course, 
            age 
        });
        
        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully' });

    } catch (error) {
        res.status(500).json({ error: 'Registration failed', details: error.message });
    }
});

module.exports = router;