var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 8080,
	app = express(),
	ProductController = require('./server-assets/controllers/productCtrl'),
	CartController = require('./server-assets/controllers/cartCtrl'),
	UserController = require('./server-assets/controllers/userCtrl'),
	OrderController = require('./server-assets/controllers/orderCtrl');

mongoose.Promise = require('q').Promise;

app.use(bodyParser.json(), cors(), express.static(__dirname + '/public'));

// User endpoints
app.post('/api/user', UserController.addUser);
app.get('/api/user', UserController.getUser);

// Cart endpoints
app.post('/api/cart/:id', CartController.addItem);
app.put('/api/cart/:id', CartController.editCart);
app.delete('/api/cart/:id', CartController.removeItem);

// Product endpoints
app.get('/api/product', ProductController.getProducts);
app.post('/api/product', ProductController.addProduct);
app.put('/api/product/:id', ProductController.editProduct);
app.delete('/api/product/:id', ProductController.archiveProduct);

// Order endpoints
app.post('/api/order', OrderController.addCart);

app.listen(port, function() {
	console.log('Now listening on port', port);
});

mongoose.connect('mongodb://localhost/ecommerce');
mongoose.connection.once('connected', function() {
	console.log('Mongo connected');
});