const express = require('express');
let friends = require('./../data/friends.json');
function initialize(app) {
  app.post('/api/friends', function(req, res) {
      let name = req.body.name;
      let profilePic = req.body.profilePic;
      let answers = JSON.parse(req.body.answers);
      console.log(`~~~${answers}`);
      let lowestScore = 1000;
      let lowestIndex;
      for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        var score = 0;
        for (var scoreIndex = 0; scoreIndex < friend.scores.length; scoreIndex++) {
          score += Math.abs(friend.scores[scoreIndex] - answers[scoreIndex]);
        }
        if(score < lowestScore) {
          lowestScore = score;
          lowestIndex = i;
        }
        console.log(`~~~${friend.name} Score: ${score}`);
      }
      console.log(`Lowest Score: ${lowestIndex} & ${JSON.stringify(friends[lowestIndex])}`);
      res.send(friends[0]);
  });
}
module.exports = initialize;
