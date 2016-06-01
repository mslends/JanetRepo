angular.module('janet')
  .directive("newProductModalDirective", function(){
    return{
      restrict: "E",
      templateUrl: "./admin/views/adminNewProductView.html",
      controller: "adminModalCtrl"
    }

  });
