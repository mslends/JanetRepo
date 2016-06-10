angular.module('janet').service('cartService', function($http, $stateParams){

  this.productId = $stateParams.productId;

  this.cart = [];



  this.addToCart = (product, productQty)=>{
    this.cart.push({product, productQty});
    return this.cart;
  };


  this.removeItem = (product)=>{
    for(var i = 0; i < this.cart.length; i++){
      if(this.cart[i] === product){
        this.cart.splice(this.cart[i], 1);
        return this.cart;
      };
    };
  };

  this.addQty = (product)=>{
    for(var i = 0; i < this.cart.length; i++){
      if(this.cart[i] === product){
      this.cart[i].productQty++;
      return this.cart;
    };
    };
  };

  this.removeQty = (product)=>{
    for(var i = 0; i < this.cart.length; i++){
      if(this.cart[i] === product){
        if(this.cart[i].productQty !== 1){
          this.cart[i].productQty--;
          return this.cart;
        };
      };
    };
  };







});
