angular.module('janet').controller('cartCtrl', function($scope, cartService, orderService){

  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown = !$scope.modalShown;
  };

$scope.cart = cartService.cart

$scope.getOneUser = ()=>{
  customerService.getOneUser($scope.user._id).then((response)=>{
    console.log(response);
    $scope.user = response;
  });
};




})
