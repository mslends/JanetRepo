angular.module('janet').controller('homeCtrl', function($scope, customerService, $state, user, productsService){

  $scope.user = user;


  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown = !$scope.modalShown;
  };


  // $scope.getOneUser = ()=>{
  //   customerService.getOneUser($scope.user._id).then((response)=>{
  //     $scope.user = response;
  //   });
  // };

  // $scope.logout = function(){
  //   customerService.logout().then(function(response){
  //     alert('you are logged out!')
  //     location.reload();
  //   });
  // };

  $scope.getProducts = function(){
    productsService.getProducts().then(function(response){
      $scope.products = response;
    })
  };

$scope.getProducts();

});
