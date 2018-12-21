//This file contains the get requests logic routing
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
  app.get('/api/friends', function(req, res) {
      var file = path.resolve(__dirname + '/../data/friends.json');
      console.log(file);
      res.sendFile(file);
  });
  app.use(express.static('app'));
  app.get('*',function (req, res) {
        res.redirect('/');
    });
}
module.exports = initialize;
