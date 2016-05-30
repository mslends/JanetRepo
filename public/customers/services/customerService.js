angular.module('janet').service('customerService', ($http)=>{

  this.createUser = (user)=>{
    return $http({
      method: 'POST',
      url: '/api/users',
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

this.getOneUser = (user._id)=>{
  return $http({
    method: 'GET',
    url: '/api/users/' + user._id
  }).then((response)=>{
    return response.data;
  });
};

this.updateUser = (user._id, user)=>{
  return $http({
    method: 'PUT',
    url: '/api/users/' + user._id,
    data: user
  }).then((response)=>{
    return response.data;
  })
};

this.login = (user)=>{
  return $http({
    method: 'POST',
    url: '/api/users/login',
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
