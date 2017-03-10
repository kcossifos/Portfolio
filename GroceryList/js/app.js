var theList = angular.module("groceryList", []);
theList.controller("Control", function($scope){
	
	$scope.listArray = [];
	$scope.food = {};

	$scope.count = 0;
	$scope.increment = function(){
	   	$scope.count++;
	   	}

	$scope.listForm = function(){
		$scope.listArray.push($scope.food);
		$scope.food = {};
		console.log($scope.listArray);
	}
	$scope.removeFood = function(fIndex){
		$scope.listArray.splice(fIndex, 1);
		$scope.count--;

	}

});