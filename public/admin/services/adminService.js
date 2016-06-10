angular.module('janet').service('adminService', function($http){

  this.getProducts = function(){
    return $http({
      method: "GET",
      url: "/api/products",
    }).then(function(response){
      return response.data;
    });
  };

  this.getSingleProduct = () => {
    return $http({
      method: "GET",
      url: "/api/products/" + product._id,
    }).then(function(response){
      return response.data;
    });
  };

  this.createProduct = function(newProduct){
    return $http({
      method: "POST",
      url: "/api/products",
      data: newProduct
    }).then(function(response){
      return response.data;
    });
  };

  this.updateSingleProduct = function(product){
    console.log("service working");
    return $http({
      method: "PUT",
      url: "/api/products/" + product._id,
      data: product
    }).then(function(response){
      return response.data;
    });
  };

this.deleteSingleProduct = function(product){
  return $http({
    method: "DELETE",
    url: "/api/products/" + product._id
  });
};



});
