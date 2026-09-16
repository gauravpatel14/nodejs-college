const express = require('express');
const router = express.Router();
const db = require('../config/firebase.js');
const { validateUser } = require('../schema/userSchema.js');

router.post('/', async (req, res) => {
    try {
        const userData = req.body;

        const validationErrors = validateUser(userData);
        
        if (validationErrors.length > 0) {
            return res.status(400).json({ 
                error: "Validation failed", 
                details: validationErrors 
            });
        }


        const docRef = await db.collection('users').add(userData);
       
        res.status(201).json({ 
            message: "User data stored successfully", 
            userId: docRef.id 
        });

    } catch (error) {
        res.status(500).json({ 
            error: "Failed to store data in Firestore", 
            details: error.message 
        });
    }
});

module.exports = router;