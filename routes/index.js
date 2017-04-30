var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  //express allows users to get text without having to specify text
  res.send(`
    <link rel ="stylesheet" type="text/css"
    href="css/style.css">
      <h1>Welcome</h1>
      <img src="images/misc/background.jpg" alt= "background" style="height:300px; width:40%" >
      <p>Roux Academy Meetups go put together artists from all walks of life</p>
      <script src="/reload/reload.js"></script>
    `);
});

module.exports = router;
