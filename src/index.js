// Lunas-MacBook-Pro:~ lunacampos$ /Users/lunacampos/mongodb/bin/mongod --dbpath=/Users/lunacampos/mongodb-data
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((request, response, next)=>{
//   if(request.method === 'GET') response.send('GET requests are disabled')
//   else next();
// })

// app.use((request, response, next)=>{
//   if(request.method) response.status(503).send('Server is under maintenance, please try again later');
// })

app.use(express.json())
app.use(userRouter);
app.use(taskRouter);
const router = new express.Router()

app.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
})
