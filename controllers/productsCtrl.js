var Product = require('../models/productModel')

module.exports = {

	readAll: function(req, res) {
		Product.find({}, function(err, results) {
			res.send(results);
		})
	},

	readOne: function(req, res) {
		Product.find({_id: req.params.id}, function(err, results) {
			if(!err) {
				res.send(results);
			}
		});
	},

	create: function(req, res) {
		var product = new Product(req.body);
		product.save().then(function(result){
			return res.status(201).send('Successfully added');
		}, function(err) {
			return res.status(500).json(err);
		})
	},

	update: function(req, res) {
		Product.update({_id: req.params.id}, req.body, function(err, results) {
			if(!err) {
				res.send('Successfully edited');
			}
		})
	},

	destroy: function(req, res) {
		Product.remove({_id: req.params.id}, function(err, results) {
			if(!err) {
				res.send('Successfully deleted');
			}
		})
	}
};
