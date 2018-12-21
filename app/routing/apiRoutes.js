const express = require('express');
function initialize(app) {
  app.post('/api/friends', function(req, res) {
      let body = req.body;
      let name = body.name;
      let profilePic = body.profilePic;
      let answers = JSON.parse(body.answers);
      console.log(`~~~${name}`);
      console.log(`~~~${profilePic}`);
      console.log(`~~~${answers}`);
      res.send('Test');
  });
}
module.exports = initialize;
