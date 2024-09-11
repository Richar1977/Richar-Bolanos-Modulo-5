const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const port = 3002;

let students = [
  { "id": 1, "name": "Alice", "age": 20, "major": "Computer Science" },
  { "id": 2, "name": "Bob", "age": 22, "major": "Mathematics" },
  { "id": 3, "name": "Charlie", "age": 21, "major": "Physics" }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((student) => student.id === id);
  if (!student) {
    res.status(404).send({ message: 'Student not found' });
  } else {
    res.json(student);
  }
});

app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((student) => student.id === id);
  if (index === -1) {
    res.status(404).send({ message: 'Student not found' });
  } else {
    students.splice(index, 1);
    fs.writeFileSync('app.js', `let students = ${JSON.stringify(students, null, 2)};`, 'utf8');
    res.send({ message: 'Student deleted successfully' });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});