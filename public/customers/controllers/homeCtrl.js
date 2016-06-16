angular.module('janet').controller('homeCtrl', function($scope, customerService, $state, user, productsService, $rootScope){

  $scope.user = user;
  $scope.searchText = $rootScope.searchTerm;
  $rootScope.$watch("searchTerm", function(ov,nv){
    $scope.searchText = nv;
  })
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
