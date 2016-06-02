angular.module('janet')
  .controller('editProductModalCtrl', function($scope, adminService){

  console.log("editProductModalCtrl working");

  $scope.editProductModalShown = false;
  $scope.toggleEditProductModal = function(product){
    $scope.productData = product;
    $scope.editProductModalShown = !$scope.editProductModalShown;
  };

  $scope.editProduct = function(product){
    adminService.updateSingleProduct(product).then(function(){
      $scope.showProducts();
      $scope.editProductModalShown = !$scope.editProductModalShown;
    });
  };

});
