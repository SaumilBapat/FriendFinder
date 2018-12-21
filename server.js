//Main Entry point of the node app

//Require needed modules
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

//Initialize html static routes
let htmlRoutes = require('./app/routing/htmlRoutes.js');
htmlRoutes(app);

//Initialize app post endpoints
let apiRoutes = require('./app/routing/apiRoutes.js');
apiRoutes(app);

//Start app
app.listen(PORT, function(status) {
  console.log(`HTML Routes Listening on PORT ${PORT}`);
});
