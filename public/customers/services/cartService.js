angular.module('janet').service('cartService', function($http, $stateParams){
  this.productId = $stateParams.productId;

  this.cart = [];

  this.addToCart = (product, productQty)=>{
    this.cart.push({product, productQty});
    return this.cart;
  };


});
