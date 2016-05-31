angular.module('janet').controller('homeCtrl', function($scope, customerService, $state){
console.log('testing');
  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.getOneUser = ()=>{
    customerService.getOneUser($scope.user._id).then((response)=>{
      $scope.user = response;
    });
  };

  $scope.logout = ()=>{
      customerService.logout().then((response)=>{
        alert('You are successfully logged out!')
        $state.go('home');
      });
    };

});
