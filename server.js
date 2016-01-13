var http = require('http');
var url = require('url');
var express = require('express');

var app = express();


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});



app.get('/api/v1/:id', function(req, res) {
	console.log("Connected API call");

	res.send({id:req.params.id, name: "The Name", description: "description"});
});
 
app.get('/lb/alive.json', function(req, res) {
	console.log("Load Balancer Keep Alive");

	res.send({status: "alive"});
});
 
app.listen(3000);
