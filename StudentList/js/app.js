var app = angular.module("WeekThree", ['ngRoute'])

app.config(function($routeProvider){

  $routeProvider
  .when("/students",{

    "controller": "StudentController",
    "templateUrl": "parts/students.html"

  })
    .when("/add", {

    "controller":"AddController",
    "templateUrl":"parts/form.html"
  
  })

    .when("/details/:infor", {

      "controller":"InfoController",
      "templateUrl":"parts/details.html"

    })

    .when("/edit/:infor",{
      "controller":"ChangeController",
      "templateUrl":"parts/form.html"
    })

    .otherwise({

      "redirectTo":"/students"

    })
});

    app.controller("StudentController", function($scope,sList){
      $scope.studentsL = sList.getStudents();
    });

    app.controller("AddController", function($scope, sList){
      $scope.student = {};

      $scope.saveStudent = function(){
        sList.addStudents($scope.student);
        $scope.student = {};
        document.location.hash = "#/students";
      }
    });

    app.controller("InfoController", function($scope, sList, $routeParams){
      $scope.student = sList.getList($routeParams.infor);
      $scope.index = $routeParams.infor;
       $scope.removeS = function(){
        sList.removeStudent($scope.index);
        document.location.hash = "#/students";
      }
    });

app.controller("ChangeController", function($scope, sList, $routeParams){
  $scope.student = sList.getList($routeParams.infor)
  angular.copy(sList.getList($routeParams.infor));

  $scope.saveStudent = function(){
        sList.updateStudent($scope.student, $routeParams.infor);
        document.location.hash = "#/students";
      }
});







