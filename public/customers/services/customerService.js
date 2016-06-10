angular.module('janet').service('customerService', function($http){

  this.createUser = (user)=>{
    return $http({
      method: 'POST',
      url: '/auth',
      data: user
    }).then((response)=>{
      return response.data;
    });
  };

  this.getUsers = ()=>{
    return $http({
      method: 'GET',
      url: '/api/users'
    }).then((response)=>{
      return response.data;
    });
  };

  this.getOneUser = (userId)=>{
    return $http({
      method: 'GET',
      url: '/api/users/' + userId
    }).then((response)=>{
      return response.data;
    });
  };

  this.currentUser = ()=>{
    return $http({
      method: 'GET',
      url: '/api/users/currentUser'
    }).then((response)=>{
      return response.data;
    });
  };

  this.updateUser = (userId, user)=>{
    return $http({
      method: 'PUT',
      url: '/api/users/' + userId,
      data: user
    }).then((response)=>{
      return response.data;
    });
  };

  this.login = (user)=>{
    return $http({
      method: 'POST',
      url: '/auth',
      data: user
    }).then((response)=>{
      return response.data;
    });
  };

  this.logout = ()=>{
      return $http({
        method: 'GET',
        url: '/api/users/logout'
      }).then((response)=>{
        return response.data;
      });
    };



});
