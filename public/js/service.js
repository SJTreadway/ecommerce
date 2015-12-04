(function() {
	angular.module('ecommerceApp')
		.service('ecommerceService', function($http) {

			this.getProducts = function() {
				return $http({
					method: 'GET',
					url: '/api/product'
				}).then(function(res) {
					return res.data;
				})
			};

			this.addProduct = function(name, description, price) {
				return $http({
					method: 'POST',
					url: '/api/product',
					data: {
						name: name,
						description: description,
						price: price
					}
				});
			};

			this.editProduct = function(id, name, description, price) {
				return $http({
					method: 'PUT',
					url: '/api/product/' + id,
					data: {
						name: name,
						description: description,
						price: price
					}
				});
			};

			this.deleteProduct = function(id) {
				return $http({
					method: 'DELETE',
					url: '/api/product/' + id
				});
			};
		});
})();