angular.module('janet')
  .directive('viewProductModalDirective', ()=>{
    return {
      restrict: "E",
      templateUrl: "./admin/views/adminProductView.html",
      controller: "viewProductModalCtrl"
    };

  });
