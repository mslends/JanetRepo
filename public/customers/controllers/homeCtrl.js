angular.module('janet').controller('homeCtrl', function($scope, customerService, $state, user, productsService){

  $scope.user = user;


  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown = !$scope.modalShown;
  };


  $scope.getProducts = function(){
    productsService.getProducts().then(function(response){
      $scope.products = response;
    });
  };
  $scope.getProducts();

});
