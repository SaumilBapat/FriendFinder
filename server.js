const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
let htmlRoutes = require('./app/routing/htmlRoutes.js');
htmlRoutes(app);
let apiRoutes = require('./app/routing/apiRoutes.js');
apiRoutes(app);

app.listen(PORT, function(status) {
  console.log(`HTML Routes Listening on PORT ${PORT}`);
});
