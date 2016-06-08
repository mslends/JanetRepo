angular.module('janet').controller('settingsCtrl', function($scope, customerService, user, $state, $rootScope) {


  $scope.user = user;

  $scope.updateUser = (user)=>{
    customerService.updateUser(user._id, user).then((response)=>{
    $scope.updatedUser = response;
    alert('Your information has been updated!')
    $scope.getOneUser();
    });
  };

  $scope.getOneUser = ()=>{
    if($scope.user){
      customerService.getOneUser($scope.user._id).then((response)=>{
        $scope.user = response;
        $scope.orders = $scope.user.orderHistory;
      });
    }
  };
  $scope.getOneUser();




});
