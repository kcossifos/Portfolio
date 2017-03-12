var app = angular.module("CupcakeApp", ['ngRoute'])

app.config(function($routeProvider){

  $routeProvider
  .when("/list",{

    "controller": "CupController",
    "templateUrl": "parts/list.html"

  })
    .when("/new", {

    "controller":"newCupController",
    "templateUrl":"parts/form.html"
  
  })

  .when("/detail/:cupIdx", {
    "controller" : "detailCupController",
    "templateUrl" : "parts/detail.html"
  })

  .when("/edit/:cupIdx", {
    "controller" : "editCupController",
    "templateUrl" : "parts/form.html"
  })

  .otherwise({

    "redirectTo" : "/list"
  })

});  


app.controller("CupController", function($scope, cupCakeStore){
  $scope.cupCake = cupCakeStore.getCupCakes();

});

app.controller("newCupController", function($scope, cupCakeStore){
  $scope.cake = {};

  $scope.saveCupCake = function(){
    cupCakeStore.addCupCakes($scope.cake);
    $scope.cake = {};
    document.location.hash = "#/list";
  }

});

app.controller("detailCupController", function($scope, cupCakeStore, $routeParams){
  $scope.cake = cupCakeStore.getCakes($routeParams.cupIdx);
  $scope.cupIdx = $routeParams.cupIdx;

  $scope.removeCake = function(){
    cupCakeStore.removeCupCakes($routeParams.cupIdx);
    document.location.hash = "#/list";
  }

});

app.controller("editCupController", function($scope, cupCakeStore, $routeParams){
  $scope.cake = angular.copy(cupCakeStore.getCakes($routeParams.cupIdx));

  $scope.saveCupCake = function(){
    cupCakeStore.updateCupCakes($scope.cake, $routeParams.cupIdx);
    document.location.hash = "#/list";
  }
});





