angular.module('janet').controller('adminCtrl', function($scope, adminService){

  $scope.showProducts = function(){
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
  });
};

$scope.editProduct = function(product){
  adminService.updateSingleProduct(product).then(function(){
    $scope.showProducts();
  });
};

$scope.id = product._id;

$scope.deleteProduct = function(id){
  adminService.deleteProduct(id).then(function(){
    $scope.showProducts();
  });
};

});
