angular.module('janet').controller('loginSignupCtrl', ($scope, customerService, $state)=>{


// Login and Sign up modal show and hide
  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown != $scope.modalShown;
  };
////////////////////////////

  $scope.createUser = function(user){
    customerService.createUser(user).then(function(response){
      $scope.newUser = response;
    });
  };

  $scope.getUser = ()=>{
    customerService.getUser().then(function(response){
      $scope.users = response;
    });
  };

  $scope.getOneUser = ()=>{
    customerService.getOneUser($scope.user._id).then(function(response){
      $scope.user = response;
    });
  };

  $scope.updateUser = (user)=>{
    mainService.updateUser(user._id, user).then((response)=>{
    $scope.updatedUser = response;
  });
  };

  $scope.login = (user)=>{
    customerService.login(user).then((response)=>{
      if(response.login){
        customerService.getOneUser(response.user._id).then((response)=>{
          $scope.user = response;
          $state.go('home');
        });
      };
    });
  };

  $scope.logout = ()=>{
      customerService.logout().then((response)=>{
        alert('You are successfully logged out!')
        $state.go('home');
      });
    };


})
