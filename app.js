const express = require('express');
const app = express();

const run = async () => {
  app.listen(3000, () => console.log('Listening on Port 3000'));
};

run();
