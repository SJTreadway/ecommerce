(function() {
	angular.module('ecommerceApp')
		.controller('adminCtrl', function($scope, ecommerceService) {

			var getProducts = function() {
				ecommerceService.getProducts().then(function(res) {
					$scope.products = res;
				});
			};

			getProducts();

			$scope.addProduct = function() {
				if(!$scope.newProduct || !$scope.newProduct.name || !$scope.newProduct.description || !$scope.newProduct.price) {
					alert('Please add a product, a description, and a price.');
				}
				else {
					ecommerceService.addProduct($scope.newProduct.name, $scope.newProduct.description, $scope.newProduct.price).then(function(res) {
						$scope.newProduct = '';
						alert("Your product has been added. Go back to the home page to find it.");
					});
				}
				getProducts();
			};

			$scope.editProduct = function() {
				if(!$scope.selectedProduct) {
					alert('Please select a product to edit.');
				}
				else {
					ecommerceService.editProduct($scope.selectedProduct._id, $scope.selectedProduct.name, $scope.selectedProduct.description, $scope.selectedProduct.price).then(function(res) {
						$scope.selectedProduct = '';
						alert("You have successfully edited this product. Go to the home page to see your changes.")
					});
				}
				getProducts();
			};

			$scope.deleteProduct = function() {
				if(!$scope.selectedProduct) {
					alert('Please select a product to delete.');
				}
				else {
					ecommerceService.deleteProduct($scope.selectedProduct._id).then(function(res) {
						$scope.selectedProduct = '';
						alert("You have successfully deleted this product. Go to the home page to see the updated list.");
					});
				}
				getProducts();
			};

		});
})();