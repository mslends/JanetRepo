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

});
