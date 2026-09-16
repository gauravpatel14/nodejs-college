const mongoose = require('mongoose');
const teacherSchema = require('../schema/teacherSchema.js');

module.exports = mongoose.model('Teacher', teacherSchema);