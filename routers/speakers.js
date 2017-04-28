var express = require('express');
var router = express.Router();


router.get('/speakers', function(req, res) {
  var info = '';
  var dataFile = req.app.get('appData');
  dataFile.speakers.forEach(function(item){
    info += `
    <h2>${item.name}</h2>
    <p>${item.summary}</p>
    `;
  });
  //express allows users to get text without having to specify text
  res.send(`
    <h1>Roux Academy Meetups</h1>
    ${info}
    `);
});


router.get('/speakers/:speakerid', function(req, res) {
  var dataFile = req.app.get('appData');

    var speaker = dataFile.speakers[req.params.speakerid];


  //express allows users to get text without having to specify text
  res.send(`
    <h1>${speaker.title}</h1>
    <h2>${speaker.name}</h2>
    <p>${speaker.summary}</p>
    `);
});

module.exports = router;
