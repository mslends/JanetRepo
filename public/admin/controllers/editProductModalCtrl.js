angular.module('janet')
  .controller('editProductModalCtrl', function($scope, adminService){

  console.log("editProductModalCtrl working");

  $scope.editProductModalShown = false;
  $scope.toggleEditProductModal = function(product){
    console.log("edit prod modal hit!");
    // $scope.startDate = new Date(product.startDate);
    // $scope.endDate = new Date(product.endDate);
    $scope.productData = product;
    $scope.editProductModalShown = !$scope.editProductModalShown;
  };

  $scope.editProduct = function(product){
    adminService.updateSingleProduct(product).then(function(){
      // $scope.startDate = new Date(product.startDate);
      // $scope.endDate = new Date(product.endDate);
      $scope.showProducts();
      $scope.editProductModalShown = !$scope.editProductModalShown;
    });
  };

});
