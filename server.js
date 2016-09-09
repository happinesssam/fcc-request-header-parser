var express = require('express')
var path = require('path')
var pug = require('pug')
var app = express();
var useragent = require('useragent');

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    var agent = useragent.parse(req.headers['user-agent']);
    res.render('index', { language:req.get('accept-language'),
    ipaddress: req.connection.remoteAddress, 
    software:agent.toString()});
}); 

var port = process.env.PORT || 8080;
app.listen(port);