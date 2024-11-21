const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
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

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
