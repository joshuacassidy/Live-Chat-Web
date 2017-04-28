var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  //express allows users to get text without having to specify text
  res.send(`
    <h1>Welcome</h1>
    <p>This is a cool meet up.</p>
    `);
});

module.exports = router;
