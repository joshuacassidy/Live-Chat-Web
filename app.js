var express = require('express');
var app = express();
//bring in data file
var dataFile = require('./data/data.json');
//allows users to set their own port
app.set('port',process.env.PORT || 3000)
app.set('appData',dataFile);



app.use(require('./routers/index'));
app.use(require('./routers/speakers'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
