const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, response) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = response.trim().split('\n')
        .map((student) => student.split(','));
      students.shift();
      const fields = {};

      students.forEach((student) => {
        if (student[3] in fields) fields[student[3]].push(student[0]);
        else fields[student[3]] = [student[0]];
      });

      console.log(`Number of students: ${students.length}`);

      Object.keys(fields).forEach((field) => {
        let message = `Number of students in ${field}: ${fields[field].length}.`;
        message += ` List: ${fields[field].join(', ')}`;
        console.log(message);
      });

      resolve();
    });
  });
}
module.exports = countStudents;