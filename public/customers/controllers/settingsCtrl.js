angular.module('janet').controller('settingsCtrl', function($scope, customerService) {

    $scope.getOneUser = ()=>{
      customerService.getOneUser($scope.user._id).then((response)=>{
        $scope.user = response;
      });
    };

    $scope.updateUser = (user)=>{
      customerService.updateUser(user._id, user).then((response)=>{
      $scope.updatedUser = response;
    });
    };


});
