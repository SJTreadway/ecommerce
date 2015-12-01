var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongojs = require('mongojs'),
	port = 8080,
	app = express(),
	db = mongojs('ecommerce', ['products']);

app.use(bodyParser.json(), cors(), express.static(__dirname + '/public'));

app.get('/products', function(req, res) {
	db.products.find({}, function(err, results) {
		res.send(results);
	})
});
app.get('/products/:id', function(req, res) {
	db.products.find({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
		if(!err) {
			res.send(results);
		}
	});
});

app.post('/products', function(req, res) {
	db.products.insert(req.body, function(err, results) {
		if(!err) {
			res.status(201).send('Successfully added');
		}
	})
});

app.put('/products/:id', function(req, res) {
	db.products.update({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results) {
		if(!err) {
			res.send('Successfully edited');
		}
	})
});

app.delete('/products/:id', function(req, res) {
	db.products.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
		if(!err) {
			res.send('Successfully deleted');
		}
	})
});

app.listen(port, function() {
	console.log('Now listening on port', port);
});