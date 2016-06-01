"use strict";

angular.module("janet", ["ui.router", "ngAnimate"]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider.state("home", {
    url: "/home",
    templateUrl: "./customers/views/homeView.html",
    controller: "homeCtrl",
    resolve: {
      user: function (customerService, $state) {
        return customerService.currentUser().then(function (response) {
          return response;
        })["catch"](function (err) {
          console.log(err);
          return "no user found";
        });
      }
    }
  }).state("productDetails", {
    url: "/productDetails",
    templateUrl: "./customers/views/productDetailsView.html",
    controller: "productDetailsCtrl"
  }).state("cart", {
    url: "/cart",
    templateUrl: "./customers/views/cartView.html",
    controller: "cartCtrl"
  }).state("settings", {
    url: "/settings",
    templateUrl: "./customers/views/customerSettingsView.html",
    controller: "settingsCtrl",
    resolve: {
      user: function (customerService, $state) {
        return customerService.currentUser().then(function (response) {
          return response;
        })["catch"](function (err) {
          console.log(err);
        });
      }
    }
  })

  // ADMIN SIDE VIEWS =============================
  .state("admin", {
    url: "/admin",
    templateUrl: "./admin/adminView.html",
    controller: "adminCtrl"
  }).state("adminProductView", {
    url: "/adminProductView",
    templateUrl: "./admin/adminProductView.html",
    controller: "adminCtrl"
  });
});

angular.module("janet").controller("adminCtrl", function ($scope, adminService) {
  $scope.showProducts = function () {
    adminService.getProducts().then(function (response) {
      console.log(response);
      $scope.products = response;
    });
  };

  $scope.showProducts();

  $scope.addNewProduct = function (newProduct) {
    adminService.createProduct(newProduct).then(function (response) {
      $scope.showProducts();
      $scope.newProduct = response;
    });
  };

  $scope.editProduct = function (product) {
    adminService.updateSingleProduct(product).then(function () {
      $scope.showProducts();
    });
  };

  $scope.id = product._id;

  $scope.deleteProduct = function (id) {
    adminService.deleteProduct(id).then(function () {
      $scope.showProducts();
    });
  };
});

angular.module("janet").service("adminService", function ($http) {
  this.getProducts = function () {
    return $http({
      method: "GET",
      url: "/api/products" }).then(function (response) {
      return response.data;
    });
  };

  this.createProduct = function (newProduct) {
    return $http({
      method: "POST",
      url: "/api/products",
      data: newProduct
    }).then(function (response) {
      return response.data;
    });
  };

  this.updateSingleProduct = function (product) {
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
    }).then(function (response) {
      return response.data;
    });
  };

  this.deleteSingleProduct = function (id) {
    return $http({
      method: "DELETE",
      url: "/api/products/" + product._id
    });
  };


});

angular.module("janet").controller("cartCtrl", function ($scope) {});

angular.module("janet").controller("homeCtrl", function ($scope, customerService, $state, user) {
  $scope.user = user;

  $scope.modalShown = false;
  $scope.toggleModal = function () {
    $scope.modalShown = !$scope.modalShown;
  };

  // $scope.getOneUser = ()=>{
  //   customerService.getOneUser($scope.user._id).then((response)=>{
  //     $scope.user = response;
  //   });
  // };

  $scope.logout = function () {
    customerService.logout().then(function (response) {
      alert("you are logged out!");
      location.reload();
    });
  };


});

angular.module("janet").controller("loginSignupCtrl", function ($scope, customerService, $state) {
  // Login and Sign up modal show and hide
  $scope.modalShown = false;
  $scope.toggleModal = function () {
    $scope.modalShown = !$scope.modalShown;
  };
  ////////////////////////////


  $scope.createUser = function (user) {
    customerService.createUser(user).then(function (response) {
      $scope.newUser = response;
      alert("You are successfully signed up! Please login to continue.");
      $scope.toggleModal();
    });
  };

  $scope.getUser = function () {
    customerService.getUser().then(function (response) {
      $scope.users = response;
    });
  };

  $scope.getOneUser = function () {
    customerService.getOneUser($scope.user._id).then(function (response) {
      $scope.user = response;
    });
  };

  $scope.updateUser = function (user) {
    customerService.updateUser(user._id, user).then(function (response) {
      $scope.updatedUser = response;
    });
  };

  $scope.login = function (user) {
    customerService.login(user).then(function (response) {
      if (response.login) {
        customerService.getOneUser(response.user._id).then(function (response) {
          $scope.user = response;
          $scope.toggleModal();
          location.reload();
        });
      };
    });
  };


});

angular.module("janet").controller("navCtrl", function ($scope, customerService, $state) {
  $scope.currentUser = (function () {
    customerService.currentUser().then(function (response) {
      $scope.user = response;
    });
  })();

  $scope.modalShown = false;
  $scope.toggleModal = function () {
    $scope.modalShown = !$scope.modalShown;
    location.reload();
  };

  $scope.logout = function () {
    customerService.logout().then(function (response) {
      alert("you are logged out!!");
      location.reload();
    });
  };


});

angular.module("janet").controller("productDetailsCtrl", function ($scope) {});

angular.module("janet").controller("settingsCtrl", function ($scope, customerService, user, $state) {
  $scope.user = user;

  $scope.updateUser = function (user) {
    customerService.updateUser(user._id, user).then(function (response) {
      $scope.updatedUser = response;
    });
  };

  $scope.getOneUser = function () {
    customerService.getOneUser($scope.user._id).then(function (response) {
      $scope.user = response;
    });
  };

  // $scope.logout = function(){
  //   customerService.logout().then(function(response){
  //     alert('you are logged out!')
  //     location.reload();
  //   });
  // };
});

angular.module("janet").service("cartService", function ($http) {});

angular.module("janet").service("customerService", function ($http) {
  this.createUser = function (user) {
    return $http({
      method: "POST",
      url: "/auth",
      data: user
    }).then(function (response) {
      return response.data;
    });
  };

  this.getUsers = function () {
    return $http({
      method: "GET",
      url: "/api/users"
    }).then(function (response) {
      return response.data;
    });
  };

  this.getOneUser = function (userId) {
    return $http({
      method: "GET",
      url: "/api/users/" + userId
    }).then(function (response) {
      return response.data;
    });
  };

  this.currentUser = function () {
    return $http({
      method: "GET",
      url: "/api/users/currentUser"
    }).then(function (response) {
      return response.data;
    });
  };

  this.updateUser = function (userId, user) {
    return $http({
      method: "PUT",
      url: "/api/users/" + userId,
      data: user
    }).then(function (response) {
      return response.data;
    });
  };

  this.login = function (user) {
    return $http({
      method: "POST",
      url: "/auth",
      data: user
    }).then(function (response) {
      return response.data;
    });
  };

  this.logout = function () {
    return $http({
      method: "GET",
      url: "/api/users/logout"
    }).then(function (response) {
      return response.data;
    });
  };


});

angular.module("janet").service("productsService", function ($http) {});

angular.module("janet").directive("footerDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./customers/views/footerView.html"
  };
});

angular.module("janet").directive("loginSignupDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./customers/views/loginSignupView.html",
    controller: "loginSignupCtrl"
  };
});

angular.module("janet").directive("navDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./customers/views/navView.html",
    controller: "navCtrl"
  };
});

angular.module("janet").directive("productDetailsDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./customers/views/productDetailsView.html"
  };
});