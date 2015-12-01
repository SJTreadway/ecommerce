(function() {
	angular.module('ecommerceApp', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '/home/homeTmpl.html',
					controller: 'homeCtrl'
				})
				.state('admin', {
					url: '/admin',
					templateUrl: '/admin/adminTmpl.html',
					controller: 'adminCtrl'
				})
		});
})();