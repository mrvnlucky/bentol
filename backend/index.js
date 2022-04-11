const express = require('express');
const app = express();

app.use(() => {
  console.log('test')
  console.log('test1')
})

app.listen(4000)