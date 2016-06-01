angular.module('janet').controller('adminCtrl', function($scope, adminService){

  $scope.editProductModalShown = false;
  $scope.toggleEditProductModal = () => {
    $scope.editProductModalShown = !$scope.editProductModalShown;
  };

  $scope.showProducts = () => {
    adminService.getProducts().then(function(response){
      console.log(response);
      $scope.products = response;
    });
  };

  $scope.showProducts();

$scope.getSingleProduct = () => {
  adminService.getSingleProduct().then(function(response){
    $scope.products = response[0];
    $scope.editProduct = {
      name: response[0].name,
      description: response[0].description,
      seller: response[0].seller,
      retailPrice: response[0].retailPrice,
      discountPrice: response[0].discountPrice,
      qty: response[0].qty,
      images: response[0].images,
      color: response[0].color,
      size: response[0].size,
      material: response[0].material,
      category: response[0].category,
      parent: response[0].parent
    };
    $scope.products = response[0].products;
    console.log(response);
  });
};


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


//
// $scope.id = product._id;
//
// $scope.deleteProduct = function(id){
//   adminService.deleteProduct(id).then(function(){
//     $scope.showProducts();
//   });
// };

});
