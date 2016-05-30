angular.module('janet').service('customerService', function($http){

  this.createUser = function(user){
    return $http({
      method: 'POST',
      url: '/auth',
      data: user
    }).then(function(response){
      return response.data;
    });
  };

this.getUsers = function(){
  return $http({
    method: 'GET',
    url: '/api/users'
  }).then(function(response){
    return response.data;
  });
};

this.getOneUser = function(userId){
  return $http({
    method: 'GET',
    url: '/api/users/' + userId
  }).then(function(response){
    return response.data;
  });
};

this.login = function(user){
  return $http({
    method: 'POST',
    url: '/auth',
    data: user
  }).then(function(response){
    return response.data;
  });
};

this.logout = function(){
    return $http({
      method: 'GET',
      url: '/api/users/logout'
    }).then(function(response){
      return response.data;
    });
  };



});
