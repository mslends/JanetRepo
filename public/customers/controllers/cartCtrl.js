angular.module('janet').controller('cartCtrl', function($scope, cartService){

  $scope.addToCart = (product)=>{
    cartService.addToCart(product);
  };

  

})
