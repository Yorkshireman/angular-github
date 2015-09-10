var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/');
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/js',  express.static(__dirname + '/js'));
app.use('/bootstrap_css_overrides',  express.static(__dirname + '/bootstrap_css_overrides'));


app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});