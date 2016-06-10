angular.module('janet').controller('navCtrl', function($scope, customerService, $state, $rootScope){

  $scope.currentUser = function(){
    customerService.currentUser().then(function(response){
      $scope.user = response;
    })
  }();

  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown = !$scope.modalShown;
    location.reload();
  };

  $scope.logout = function(){
    customerService.logout().then(function(response){
      swal('you are logged out!!')
      $state.go('home');
      location.reload();
    });
  };
$scope.updateFilter = function(searchTerm){
  $rootScope.searchTerm = searchTerm;
}


});
