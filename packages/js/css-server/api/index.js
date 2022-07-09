const express = require('express');
const path = require('path');
const api = express();

api.use(express.static(path.join(process.cwd(), 'public')));

module.exports = api;
