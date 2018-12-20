const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
app.post('/api/friends', function(req, res) {
    console.log(req.body);
    res.send('Test');
});
