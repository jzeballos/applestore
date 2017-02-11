(function () {
	'use strict';

	// ng-app on html is an angular module in JS



	var apple = angular.module('apple', []); // creates a module

	apple.controller('MacController', function ($scope, productsService) {
		$scope.title = 'The Awesome Apple App';

		$scope.doSubmit = function () {
			productsService.addProduct(
				$scope.myInputName, $scope.myInputPrice
			);
		}

		$scope.getProducts = function(){
        $scope.products = productsService.getProducts();
    }

    $scope.getProducts();
		$scope.featureProduct = productsService.getFeatured();
		$scope.selectFeatured = function(index) {
			productsService.selectFeatured(index);
			$scope.featureProduct = productsService.getFeatured();
		}

	});


	apple.service('productsService', function () {

		var products = [
			{
				name: 'Macbook Pro 15 inch',
				price: 3000,
				featured: false
			},
			{
				name: 'Macbook Pro 13 inch',
				price: 1699.99,
				featured: false
			},
			{
				name: 'iPad Pro',
				price: 999.99,
				featured: false
			},
			{
				name: 'iPad',
				price: 799.99,
				featured: false
			},
			{
				name: 'iPhone',
				price: 679.99,
				featured: false
			}
		];


		this.getProducts = function () {
			// check authentication
			return products;
		}

		this.selectFeatured = function(index) {
			// products[index].featured = !products[index].featured;
			for (var i in products) {
					products[i].featured = false;
			}
			products[index].featured = true;

		}

		this.addProduct = function (name, price) {
			// console.log('this defective service function fired!');
			products.push({
				name: name,
				price: price
			});
		}

		this.getFeatured = function() {
			for (var i in products) {
				if (products[i].featured === true) {
					return products[i];
				}
			}
		}
	});









	var ms = angular.module('microsoft', []);
})();


// there is an angular object
// we register a module with angular


/*

*/
// the angular object has functions lime module
//
