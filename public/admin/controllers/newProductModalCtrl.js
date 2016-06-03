angular.module('janet')
  .controller('newProductModalCtrl', function($scope, adminService){

    console.log("newProductModalCtrl working");

    $scope.newProductModalShown = false;
    $scope.toggleNewProductModal = function(){
      $scope.newProductModalShown = !$scope.newProductModalShown;
    };

});
