angular.module('janet').service('cartService', function($http){

  let cart = [];


  this.addToCart = (product)=>{
    cart.push(product);
  };

});
