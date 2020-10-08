'use strict';

const express = require('express');

const app = express();

app.use(require('./src/routes')); 

module.exports = app;