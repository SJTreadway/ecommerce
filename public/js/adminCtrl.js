(function() {
	angular.module('ecommerceApp')
		.controller('adminCtrl', function($scope, ecommerceService) {

			$scope.addProduct = function() {
				ecommerceService.addProduct($scope.newProduct);
			};

			var getProducts = function() {
				ecommerceService.getProducts().then(function(res) {
					$scope.products = res;
				});
			};

		});
})();