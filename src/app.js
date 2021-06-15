const express = require('express');
const app = express();

app.get('/hello_world', (req, res) => {
  console.log('requesr accepted');
  res.send({
    data: {
      name: 'first_nodejs'
    },
  })
}
)
module.exports = app;