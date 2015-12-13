var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/abc',function(require,response) {
	response.send('Hahahahaha');
});
app.get('/',function(request,response) {
	response.send('Root');
});
app.get('/index.htm',function(request,response) {
	console.log("haha\n");
	console.log(__dirname);
	response.sendFile( __dirname + "/" + "index.htm");
});
app.get('/demo',function(request,response) {
	resfile = {
		first_name:request.query.first_name,
		last_name:request.query.last_name
	};
	console.log(response);
	response.send(JSON.stringify(resfile));
});

app.post('/login',function(req,res) {
	console.log("Home post request");
	res.send('login');
})

var server = app.listen(8082,function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("host: %s  port: %s",host,port);
});