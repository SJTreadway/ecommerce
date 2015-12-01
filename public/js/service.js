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

			this.addProduct = function(name, price) {
				return $http({
					method: 'POST',
					url: '/products',
					data: name, price
				}).then(function() {
					alert("Your product has been added. Go back to the home page to find it.");
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