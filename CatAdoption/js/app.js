function controller($scope) {
    $scope.comment = [];
    $scope.btn_add = function() {
        if($scope.txtcomm !=''){
        $scope.comment.push($scope.txtcomm);
        $scope.txtcomm = "";
        }
    }

    $scope.item = function($index) {
        $scope.comment.splice($index, 1);
    }
}

