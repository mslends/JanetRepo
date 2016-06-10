angular.module('janet').service('orderService', function($http){

  this.createOrder = (order, user)=>{
    return $http({
      method: 'POST',
      url: '/api/orders',
      data: order
    }).then((response)=>{
      user.orderHistory.push(response.data._id)
      return $http({
        method: 'PUT',
        url: '/api/users/' + user._id,
        data: user
      });
      return response.data;
    });
  };

  this.getOrders = ()=>{
    return $http({
      method: 'GET',
      url: '/api/orders'
    }).then((response)=>{
      return response.data;
    });
  };

  this.getOneOrder = (orderId)=>{
    return $http({
      method: 'GET',
      url: '/api/orders/' + orderId
    }).then((response)=>{
      return response.data;
    });
  };

  this.updateOrder = (orderId, order)=>{
    return $http({
      method: 'PUT',
      url: '/api/orders/' + orderId,
      data: order
    }).then((response)=>{
      return response.data;
    });
  };

  this.deleteOrder = (orderId)=>{
    return $http({
      method: 'DELETE',
      url: 'api/orders/' + orderId
    }).then((response)=>{
      return response.data;
    });
  };




}); // end of angular.module
