var express = require('express')
var path = require('path')
var pug = require('pug')
var app = express();
var useragent = require('useragent');

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    var agent = useragent.parse(req.headers['user-agent']);
    var ip = require('ip');
    res.render('index', { language:req.get('accept-language').split(",")[0],
    ipaddress: ip.address(), 
    software:agent.toString()});
}); 

var port = process.env.PORT || 8080;
app.listen(port);