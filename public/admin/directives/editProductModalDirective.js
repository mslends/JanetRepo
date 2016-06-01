angular.module('janet')
  .directive("editProductModalDirective", function(){
    return{
      restrict: "E",
      templateUrl: "./admin/views/adminEditProductView.html",
      controller: "adminCtrl"
    }

  });
