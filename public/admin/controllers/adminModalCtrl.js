angular.module('janet')
  .controller('adminModalCtrl', function($scope, adminService){

    console.log("adminModalCtrl working");

    $scope.newProductModalShown = false;
    $scope.toggleNewProductModal = function(){
      $scope.newProductModalShown = !$scope.newProductModalShown;
    };

});
