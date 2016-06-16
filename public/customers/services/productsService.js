angular.module('janet').service('productsService', function($http){

  this.getProducts = function(){
    return $http({
      method: "GET",
      url: "/api/products"
    }).then(function(response){
      return response.data;
    });
  };

  this.getSingleProduct = function(productId){
    return $http({
      method: "GET",
      url: "/api/products/" + productId
    }).then(function(response){
      return response.data;
    });
  };

  // this.updateProductById = function(product, order){
  //   return $http({
  //     method: "PUT",
  //     url: "/api/products/" + product._id,
  //     data: {
  //       amntSold: order.qty
  //     }
  //   }).then(function(response){
  //     return response.data;
  //   });
  // };














});
