const path = require('path');
const express = require('express');
function initialize(app) {
  app.get('/', function(req, res) {
      var file = path.resolve(__dirname + '/../public/home.html');
      console.log(file);
      res.sendFile(file);
  });
  app.get('/survey', function(req, res) {
      var file = path.resolve(__dirname + '/../public/survey.html');
      console.log(file);
      res.sendFile(file);
  });
  app.use(express.static('app'));
}
module.exports = initialize;
