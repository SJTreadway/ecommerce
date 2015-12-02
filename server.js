var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 8080,
	app = express(),
	ProductController = require('./controllers/productsCtrl'),
	Product = require('./models/productModel');

app.use(bodyParser.json(), cors(), express.static(__dirname + '/public'));

app.get('/products', ProductController.readAll);
app.get('/products/:id', ProductController.readOne);
app.post('/products', ProductController.create);
app.put('/products/:id', ProductController.update);
app.delete('/products/:id', ProductController.destroy);
app.listen(port, function() {
	console.log('Now listening on port', port);
});

mongoose.connect('mongodb://localhost/ecommerce');