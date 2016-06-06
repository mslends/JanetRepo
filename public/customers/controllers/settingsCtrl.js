angular.module('janet').controller('settingsCtrl', function($scope, customerService, user, $state) {

  $scope.user = user;

  $scope.updateUser = (user)=>{
    customerService.updateUser(user._id, user).then((response)=>{
    $scope.updatedUser = response;
    alert('Your information has been updated!')
    });
  };

  $scope.getOneUser = ()=>{
    if($scope.user){
      customerService.getOneUser($scope.user._id).then((response)=>{
          console.log(response);
        $scope.oneUser = response;
        $scope.orders = $scope.oneUser.orderHistory;
      });
    }
  }();




});
