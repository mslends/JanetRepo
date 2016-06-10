angular.module('janet')
  .controller('editProductModalCtrl', function($scope, adminService){

  console.log("editProductModalCtrl working");

  $scope.editProductModalShown = false;

  $scope.toggleEditProductModal = function(product){
    console.log("edit prod modal hit!");
    if(product.startDate){
      $scope.startDate = new Date(product.startDate);
    } if(product.endDate){
      $scope.endDate = new Date(product.endDate);
    }

    $scope.productData = product;
    $scope.editProductModalShown = !$scope.editProductModalShown;
  };

  $scope.editProduct = function(product){
      console.log("edit product hit!");
    adminService.updateSingleProduct(product).then(function(){
      $scope.showProducts();
      // $scope.editProductModalShown = !$scope.editProductModalShown;
    });
  };

});
