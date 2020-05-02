
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();

const contactRouter = require('./src/routes/contactRoutes');

app.use(express.static(__dirname));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', contactRouter)

module.exports.server = serverless(app);