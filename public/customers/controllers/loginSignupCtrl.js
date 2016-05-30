angular.module('janet').controller('loginSignupCtrl', function($scope, customerService){


// Login and Sign up modal
  $scope.modalShown = false;
  $scope.toggleModal = function(){
    $scope.modalShown != $scope.modalShown;
  };
////////////////////////////

  $scope.createUser = function(user){
    customerService.createUser(user).then(response){
      $scope.newUser = response;
    };
  };

  $scope.getUser = function(){
    customerService.getUser().then(response){
      $scope.users = response;
    };
  };

  $scope.getOneUser = function(){
    customerService.getOneUser($scope.user._id).then(response){
      $scope.user = response;
    };
  };

  $scope.updateUser = function(user){
    mainService.updateUser(user._id, user).then(function(response){
    $scope.updatedUser = response;
  });
  };

  $scope.login = function(user){
    customerService.login(user).then(function(response){
      if(response.login){
        customerService.getOneUser(response.user._id).then(function(response){
          $scope.user = response;
          //$state.go('home');
          //once state has been all set up we can inject $state
          //to the function and send logged out users to homepage
        });
      };
    });
  };

  $scope.logout = function(){
      customerService.logout().then(function(response){
        // alert('You are successfully logged out!')
        // $state.go('home');
        //once state has been all set up we can inject $state
        //to the function and send logged out users to homepage
      });
    };


})
