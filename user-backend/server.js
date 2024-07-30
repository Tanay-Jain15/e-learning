const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;
// try{
//   const newUser = new User({

// });
app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password,
  });

  newUser
    .save()
    .then((user) => res.json("Tested!!"))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.get("/", (req, res) => {
  res.json("Nilanshi is a developer");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
