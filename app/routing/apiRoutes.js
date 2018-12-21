const express = require('express');
function initialize(app) {
  app.post('/api/friends', function(req, res) {
      let name = req.body.name;
      let profilePic = req.body.profilePic;
      let answers = req.body.answers;
      console.log(`~~~${name}`);
      console.log(`~~~${profilePic}`);
      console.log(`~~~${answers}`);
      res.send('Test');
  });
}
module.exports = initialize;
