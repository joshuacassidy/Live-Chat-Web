var express = require('express');
var app = express();
//bring in data file
var dataFile = require('./data/data.json');
var reload = require('reload');
//allows users to set their own port
app.set('port',process.env.PORT || 3000)
app.set('appData',dataFile);



app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(express.static('app/public'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
reload(server,app)
