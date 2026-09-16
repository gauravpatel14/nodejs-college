const mongoose = require('mongoose');
const studentSchema = require('../schema/studentSchema.js');

module.exports = mongoose.model('Student', studentSchema);