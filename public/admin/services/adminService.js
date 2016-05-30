angular.module('janet').service('adminService', function($http){

  this.getProducts = function(){
    return $http({
      method: "GET",
      url: "/api/products",
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
    return $http({
      method: "PUT",
      url: "/api/products/:id",
      data: {
        name: product.name,
        description: product.description,
        seller: product.seller,
        retailPrice: product.retailPrice,
        discountPrice: product.discountPrice,
        qty: product.qty,
        images: product.images,
        color: product.color,
        size: product.size,
        material: product.material,
        category: product.category,
        parent: product.parent
      }
    }).then(function(response){
      return response.data;
    });
  };

this.deleteSingleProduct = function(id){
  return $http({
    method: "DELETE",
    url: "/api/products/" + product._id
  });
};



});
