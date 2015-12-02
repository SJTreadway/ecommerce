(function() {
	angular.module('ecommerceApp')
		.service('ecommerceService', function($http) {

			this.getProducts = function() {
				return $http({
					method: 'GET',
					url: '/products'
				}).then(function(res) {
					return res.data;
				})
			};

			this.addProduct = function(name, description, price) {
				return $http({
					method: 'POST',
					url: '/products',
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
					url: '/products/' + id,
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
					url: '/products/' + id
				});
			};
		});
})();