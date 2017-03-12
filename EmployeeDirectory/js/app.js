var app = angular.module('empApp', []);

app.controller('myController', function($scope, empDir) {
    $scope.employees = empDir.getEmployees();
    $scope.employee = {};
    $scope.empSave = function(){
        empDir.addEmp($scope.employee);
        $scope.employee = {};
    };
    $scope.removeEmp = function(index){
        empDir.removeEmp(index);
    };
    
    
});
    