angular.module('janet').controller('adminCtrl', function($scope, $stateParams, adminService){

  console.log("adminCtrl working");

  $scope.showProducts = () => {
    adminService.getProducts().then(function(response){
      console.log(response);
      $scope.products = response;
    });
  };

  $scope.showProducts();

$scope.addNewProduct = function(newProduct){
  adminService.createProduct(newProduct).then(function(response){
    $scope.showProducts();
    $scope.newProduct = response;
    $scope.newProduct = {};
    $scope.newProductModalShown = !$scope.newProductModalShown;
  });
};

$scope.deleteProduct = function(product){
  adminService.deleteSingleProduct(product).then(function(){
    $scope.showProducts();
  });
};

$scope.editProductModalShown = false;

$scope.toggleEditProductModal = function(product){
    console.log("toggle modal");
    if(product.startDate) {
        product.startDate = new Date(product.startDate);
    }if(product.endDate){
        product.endDate = new Date(product.endDate);
    }
    
  $scope.productData = product;
  $scope.editProductModalShown = !$scope.editProductModalShown;
};

$scope.editProduct = function(product){
    console.log("edit product hit!");
  adminService.updateSingleProduct(product).then(function(){
    $scope.showProducts();
    $scope.editProductModalShown = !$scope.editProductModalShown;
  });
};

});
