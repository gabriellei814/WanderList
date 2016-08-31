var port = process.env.PORT || 3000;
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/public')));

require('./server/request-handler')(app);

app.listen(port, function() {
  console.log('server up at port 3000!');
});



// mongoimport -h ds017195.mlab.com:17195 -d lentata -c lists -u lentata -p lentata --file /Users/stephenshelton/Desktop/thesis-project/WanderList/public/dummy1.JSON
