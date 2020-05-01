
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();

const todoRouter = require('./src/routes/toDoRoutes');

app.use(express.static(__dirname));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', todoRouter)

module.exports.server = serverless(app);