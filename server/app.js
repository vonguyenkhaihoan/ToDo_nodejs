const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user_routers');
const todoRouter = require('./routers/todo_routers');


const app = express();

app.use(body_parser.json());

app.use('/',userRouter);
app.use('/',todoRouter);

module.exports = app;