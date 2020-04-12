const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
  _id: userOneId,
  name: 'Luna',
  email: 'luna@example.com',
  password: 'pass123',
  tokens: [{
    token:jwt.sign({
      _id: userOneId
    }, process.env.JWT_SECRET)
  }]
}
const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
  _id: userTwoId,
  name: 'Luna luna',
  email: 'lunaluna@example.com',
  password: 'pass123999',
  tokens: [{
    token:jwt.sign({
      _id: userTwoId
    }, process.env.JWT_SECRET)
  }]
}

const taskOne ={
  _id: new mongoose.Types.ObjectId(),
  description: 'First task',
  completed: false,
  owner: userOne._id
}
const taskTwo ={
  _id: new mongoose.Types.ObjectId(),
  description: 'Second task',
  completed: true,
  owner: userOne._id
}
const taskThree ={
  _id: new mongoose.Types.ObjectId(),
  description: 'Third task',
  completed: true,
  owner: userTwo._id
}

const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
}

module.exports = {
  userOne,
  userTwo,
  userOneId,
  userTwoId,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase
}
