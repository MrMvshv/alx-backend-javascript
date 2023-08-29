const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', async (req, res) => {
  const initialHeaderResponse = 'This is the list of our students\n';

  try {
    const fields = await countStudents(process.argv[2]);

    // Calculate the total number of students
    const totalStudents = Object.values(fields).reduce((total, field) => total + field.length, 0);

    let response = `${initialHeaderResponse}Number of students: ${totalStudents}\n`;

    Object.keys(fields).forEach((field) => {
      response += `Number of students in ${field}: ${fields[field].length}.`;
      response += ` List: ${fields[field].join(', ')}\n`;
    });

    res.send(response);
  } catch (err) {
    res.send(`${initialHeaderResponse}${err.message}`);
  }
});

app.listen(PORT, () => {
  console.log('...');
});

module.exports = app;
