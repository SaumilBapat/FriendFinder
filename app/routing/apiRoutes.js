const express = require('express');
function initialize(app) {
  app.post('/api/friends', function(req, res) {
      console.log(req.body);
      res.send('Test');
  });
}
module.exports = initialize;
