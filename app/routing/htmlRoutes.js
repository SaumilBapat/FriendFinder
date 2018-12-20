const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
app.use(express.static('app'))
app.post('/api/friends', function(req, res) {
    console.log(req.body.name);
    res.send('Test');
});
app.post('/api/data', (request, response) => {
  const postBody = request.body;
  console.log(postBody);
  response.send('Test');
});
app.listen(PORT, function(status) {
  console.log(`HTML Routes Listening on PORT ${PORT}`);
});
