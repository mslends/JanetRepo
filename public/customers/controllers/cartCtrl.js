angular.module('janet').controller('cartCtrl', function($scope, cartService, orderService){
  

  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.cart = cartService.cart
  console.log($scope.cart)

  $scope.getOneUser = ()=>{
    customerService.getOneUser($scope.user._id).then((response)=>{
      $scope.user = response;
    });
  };



  $scope.removeItem = (item)=>{
    cartService.removeItem(item);
  };

  $scope.addQty = (item)=>{
    cartService.addQty(item);
  };

  $scope.removeQty = (item)=>{
    cartService.removeQty(item);
  };


  $scope.shipping = 0;
  $scope.subtotal = 0;
  $scope.total = 0;
  $scope.totalCost = ()=>{
    $scope.shipping = 0;
    $scope.subtotal = 0;
    $scope.total = 0;
    for(var i = 0; i < $scope.cart.length; i++){
      $scope.subtotal += ($scope.cart[i].product.discountPrice * $scope.cart[i].productQty);
      $scope.shipping  += ($scope.subtotal * 0.02) + 5;
      $scope.total = $scope.subtotal + $scope.shipping;
    }
  };
  $scope.totalCost();

  $scope.createOrder =()=>{
    orderService.createOrder().then((response)=>{
      $scope.newOrder = response;
    })
  }


})
