const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const students = [
  { id: 1, name: "Aminul", email: "aminul@gmail.com" },
  { id: 2, name: "Abdur Rakib", email: "rakib@gmail.com" },
  { id: 3, name: "Habib", email: "habib@gmail.com" },
  { id: 4, name: "Saimon", email: "saimon@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello form server");
});

app.get("/students", (req, res) => {
  res.send(students);
});

app.post("/students", (req, res) => {
  console.log("Post api hitting");
  // console.log(req.body);
  const newStudents = req.body;
  newStudents.id = students.length + 1; //Set id no to newsStudents object
  students.push(newStudents);
  console.log(newStudents);
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
