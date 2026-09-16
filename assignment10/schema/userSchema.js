const validateUser = (data) => {
    const errors = [];
    
    if (!data.name || typeof data.name !== 'string') {
        errors.push("Name is required and must be a string");
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push("A valid email is required");
    }
    
    if (data.age === undefined || typeof data.age !== 'number' || data.age < 1 || data.age > 120) {
        errors.push("Age is required and must be a valid number between 1 and 120");
    }
    
    if (!data.course || typeof data.course !== 'string') {
        errors.push("Course is required");
    }
    
    return errors;
};

module.exports = { validateUser };