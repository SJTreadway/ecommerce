(function() {
	angular.module('ecommerceApp')
		.controller('homeCtrl', function($scope, ecommerceService) {

			var getProducts = function() {
				ecommerceService.getProducts().then(function(res) {
					$scope.products = res;
				});
			};

			getProducts();
		})

})();