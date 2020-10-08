'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(require('./app/routes')); 

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);