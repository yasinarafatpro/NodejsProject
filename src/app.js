const express = require('express');
const app = express();

app.get('/hello_world', (req, res) => {
  console.log('requesr accepted');
  res.send({
    data: {
      name: 'first_nodejs'
    },
  });
};
);
app.post('/hello_post', (req, res) => {
  console.log('requesr accepted',req.body);
  res.send({
    data: {
      name: 'first_nodejs-post'
    },
  });
};
);
module.exports = app;