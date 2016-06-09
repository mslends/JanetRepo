angular.module('janet')
  .controller('newProductModalCtrl', function($scope, adminService){

    console.log("newProductModalCtrl working");

    $scope.newProductModalShown = false;
    $scope.toggleNewProductModal = function(){
      console.log("new prod modal hit!");
      $scope.newProductModalShown = !$scope.newProductModalShown;
    };

});
