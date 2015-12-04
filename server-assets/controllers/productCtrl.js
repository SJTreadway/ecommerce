var mongoose = require('mongoose'),
	Product = require('../models/product');

module.exports = {

	getProducts: function(req, res) {
		Product.find().then(function(result) {
			return res.json(result)
		}).catch(function(err) {
			return res.json(err);
		});
	},

	addProduct: function(req, res) {
		var product = new Product(req.body);
		product.save().then(function(result) {
			return res.json(result)
		}).catch(function(err) {
			return res.json(err);
		});
	},

	editProduct: function(req, res) {
		Product.findByIdAndUpdate(req.params.id, req.body, {new:true}).exec().then(function(result) {
			return res.json(result)
		}).catch(function(err) {
			return res.json(err);
		});
	},

	archiveProduct: function(req, res) {
		Product.findById(req.params.id).exec().then(function(result) {
			result.status = 'archived';
			return result.save().then(function(resu) {
				return res.json(resu)
		}).catch(function(err) {
			return res.json(err);
		});
	});
	},
};