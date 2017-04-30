var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var reload = require('reload');

app.set('port',process.env.PORT || 3000)
app.set('appData',dataFile);
app.set('view engine', 'ejs');
app.set('views','app/views');

app.locals.siteTitle = 'Roux Meetups'

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(express.static('app/public'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
reload(server,app)
