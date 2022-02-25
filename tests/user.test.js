const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../src/app");
const User = require("../src/models/user");

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  name: "Testing2",
  email: "testing1@gmail.com",
  password: "MyPass777!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

afterEach(() => {
  console.log("afterEach");
});

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Twsting1",
      email: "testing2@gmail.com",
      password: "MyPass777!",
    })
    .expect(201);
});

test("Should login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test("Should login nonexisting user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "testing1@gmail.com",
      password: "MyPass777!",
    })
    .expect(200);
});

test("Should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});
