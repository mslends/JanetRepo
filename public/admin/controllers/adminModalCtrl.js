angular.module('janet')
  .controller('adminModalCtrl', function($scope, adminService){

    console.log("test");

    $scope.newProductModalShown = false;
    $scope.toggleNewProductModal = function(){
      $scope.newProductModalShown = !$scope.newProductModalShown;
    };

    $scope.editProductModalShown = false;
    $scope.toggleEditProductModal = function(){
      $scope.editProductModalShown = !$scope.editProductModalShown;
    };

});
