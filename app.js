const express = require('express');
const { runProcessor } = require('./modules/processor');
const { log } = require('./utils/logger');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('128Pi is running...');
});

app.post('/process', (req, res) => {
  const result = runProcessor(req.body);
  log('Processing request');
  res.json(result);
});

module.exports = app;
