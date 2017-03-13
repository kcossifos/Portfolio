var imgbase = angular.module('imgbase', ['firebase', 'angular.filter']);

imgbase.controller("fireController", function($scope, $firebaseArray) {

  var ref = new Firebase("gs://smsproject-8cffb.appspot.com");

  var img = new Firebase("gs://smsproject-8cffb.appspot.com/images");
  $scope.imgs = $firebaseArray(img);

  var pictures = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];
  $scope.uploadFile = function() {
    var file = $("#nameImg").val();
    if (file.length > 0) {
      var valid = false;
      for (var i = 0; i < pictures.length; i++) {
        var sCurExtension = pictures[i];
        if (file.substr(file.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
          valid = true;
          var picUpload = document.getElementById("nameImg").files;
          if (picUpload.length > 0) {
            var fileToLoad = picUpload[0];

            var fileReader = new FileReader();

            fileReader.onload = function(fileLoadedEvent) {
              var textAreaFileContents = document.getElementById(
                "textAreaFileContents"
              );


              $scope.imgs.$add({
                date: Firebase.ServerValue.TIMESTAMP,
                sms: fileLoadedEvent.target.result
              });
            };

            fileReader.readAsDataURL(fileToLoad);
          }
          break;
        }
      }

      if (!valid) {
        alert('File is not valid');
        return false;
      }
    }

    return true;
  }

});
