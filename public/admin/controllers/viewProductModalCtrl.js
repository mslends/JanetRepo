angular.module('janet')
  .controller('viewProductModalCtrl', ($scope, adminService)=>{

    console.log('viewProductModalCtrl working');

$scope.viewProductModalShown = false;

$scope.toggleViewProductModal = (product)=>{
  console.log('view prod modal hit!');
  if(product.startDate){
    product.startDate = new Date(product.startDate);
  } if(product.endDate){
    product.endDate = new Date(product.endDate);
  }

$scope.product = product;
$scope.viewProductModalShown = !$scope.viewProductModalShown;

};

// $scope.showSingleProduct = ()=>{
//   console.log("showing a product!");
//   adminService.getSingleProduct().then((response)=>{
//     console.log(response);
//     $scope.product = response;
//   });
// };
//
// showSingleProduct();


  });
