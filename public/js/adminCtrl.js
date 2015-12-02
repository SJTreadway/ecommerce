(function() {
	angular.module('ecommerceApp')
		.controller('adminCtrl', function($scope, ecommerceService) {

			$scope.addProduct = function() {
				ecommerceService.addProduct($scope.newProduct).then(function(res) {
					$scope.newProduct = '';
					alert("Your product has been added. Go back to the home page to find it.");
				});
			};

			var getProducts = function() {
				ecommerceService.getProducts().then(function(res) {
					$scope.products = res;
				});
			};

			getProducts();

			$scope.editProduct = function() {
				ecommerceService.editProduct($scope.selectedProduct._id, $scope.selectedProduct.name, $scope.selectedProduct.price).then(function(res) {
					$scope.selectedProduct = '';
					alert("You have successfully edited this product. Go to the home page to see your changes.")
				});
			};

			$scope.deleteProduct = function() {
				ecommerceService.deleteProduct($scope.selectedProduct._id).then(function(res) {
					$scope.selectedProduct = '';
					alert("You have successfully deleted this product. Go to the home page to see the updated list.");
				});
			};

		});
})();