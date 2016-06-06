angular.module('janet').controller('loginSignupCtrl', function($scope, customerService, $state){

// Login and Sign up modal show and hide
  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown = !$scope.modalShown;
  };
////////////////////////////


$scope.createUser = function(user){
  customerService.createUser(user).then(function(response){
    $scope.newUser = response;
    alert('You are successfully signed up! Please login to continue.');
    location.reload();
  })
}

  $scope.getUsers = ()=>{
    customerService.getUsers().then((response)=>{
      $scope.users = response;
    });
  };

  $scope.getOneUser = ()=>{
    customerService.getOneUser($scope.user._id).then((response)=>{
      $scope.user = response;
    });
  };

  $scope.updateUser = (user)=>{
    customerService.updateUser(user._id, user).then((response)=>{
    $scope.updatedUser = response;
  });
  };

  $scope.login = (user)=>{
    customerService.login(user).then((response)=>{
      if(response.login){
        customerService.getOneUser(response.user._id).then((response)=>{
          $scope.user = response;
          $scope.toggleModal();
          location.reload();
        });
      };
    });
  };



})
