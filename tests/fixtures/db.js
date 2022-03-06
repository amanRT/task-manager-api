const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userOneId = new mongoose.Types.ObjectId();
const User = require("../../src/models/user");

const userOne = {
  _id: userOneId,
  name: "Testing1",
  email: "testing1@gmail.com",
  password: "MyPass777!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const setupDatabase = async () => {
  await User.deleteMany();
  await new User(userOne).save();
};

module.exports = {
  userOneId,
  userOne,
  setupDatabase,
};
