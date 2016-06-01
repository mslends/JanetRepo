angular.module('janet').controller('settingsCtrl', function($scope, customerService, user, $state) {

  $scope.user = user;

  $scope.updateUser = (user)=>{
    customerService.updateUser(user._id, user).then((response)=>{
    $scope.updatedUser = response;
    });
  };

  $scope.getOneUser = ()=>{
    customerService.getOneUser($scope.user._id).then((response)=>{
      $scope.user = response;
    });
  };

  // $scope.logout = function(){
  //   customerService.logout().then(function(response){
  //     alert('you are logged out!')
  //     location.reload();
  //   });
  // };

});
