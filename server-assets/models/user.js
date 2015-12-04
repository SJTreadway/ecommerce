var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {type: String, required: true, lowercase: true, index: true},
	cart: {
		items: [{
			product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
			quantity: {type: Number, default: 1, min: 0}
		}],
		updated: {type: Date},
	},
	orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true}]
});

userSchema.pre('save', function(next) {
	this.cart.updated = new Date();
	next();
});

module.exports = mongoose.model('User', userSchema);