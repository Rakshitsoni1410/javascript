const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/authDB')
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Model
const User = mongoose.model('User', userSchema);

// REGISTER
app.post('/register', async (req, res) => {
  const data = new User(req.body);
  await data.save();
  res.send("Registered Successfully");
});

// LOGIN
app.post('/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (user) {
    res.send("Login Success");
  } else {
    res.send("Invalid User");
  }
});

// GET ALL USERS (optional)
app.get('/users', async (req, res) => {
  const data = await User.find();
  res.json(data);
});

// DELETE USER (optional)
app.delete('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User Deleted");
});

// Server Start
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});