const fs = require('fs');

const studentInfo = "Name: Gaurav\nCourse: Full Stack Development\nTechnology: Node.js\n";

fs.writeFile('student.txt', studentInfo, (err) => {
    if (err) {
        return console.error("Error creating file:", err);
    }
    console.log('File created successfully');

    fs.readFile('student.txt', 'utf8', (err, data) => {
   
    if (err) {
        return console.error("Error reading file:", err);
    }
    

    console.log(data);

    const additionalInfo = "Experience: 1 Year\nCity: Kolkata\n";

fs.appendFile('student.txt', additionalInfo, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Data updated successfully');
});

fs.rename('student.txt', 'studentDetails.txt', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('File renamed successfully');

    fs.unlink('studentDetails.txt', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('File deleted successfully');
    })

})
    })
});