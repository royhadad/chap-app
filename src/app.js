const express = require('express');
const path = require('path');
const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

module.exports = app;