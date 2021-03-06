angular.module('janet').controller('cartCtrl', function($scope, cartService, orderService, user, $state, productsService){


  $scope.modalShown = false;
  $scope.toggleModal = ()=>{
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.cart = cartService.cart;

  if(user !== "no user found"){
    $scope.user = user;
  };

  $scope.getOneUser = ()=>{
    customerService.getOneUser($scope.user._id).then((response)=>{
      $scope.user = response;
    });
  };



  $scope.removeItem = (item)=>{
    cartService.removeItem(item);
    $scope.totalCost();
  };

  $scope.addQty = (item)=>{
    cartService.addQty(item);
    $scope.cart = cartService.cart
    $scope.totalCost();
  };

  $scope.removeQty = (item)=>{
    cartService.removeQty(item);
    $scope.cart = cartService.cart
    $scope.totalCost();
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
    $scope.items = [];
    for(var i = 0; i < $scope.cart.length; i++){
      $scope.items.push({product: $scope.cart[i].product._id, qty:$scope.cart[i].productQty} );
    };

    $scope.order = {
      user: $scope.user._id,
      totalPrice: $scope.total,
      productsOrdered: $scope.items
    };


    if(!$scope.user.shippingAddress.street){
      return swal("Street address is required.")
    };
    if(!$scope.user.shippingAddress.city){
      return swal("City is required.")
    };
    if(!$scope.user.shippingAddress.state){
      return swal("State is required.")
    };
    if(!$scope.user.shippingAddress.zip){
      return swal("Zipcode is required.")
    };
    if(!$scope.user.name){
      return swal("Name is required.")
    };


    orderService.createOrder($scope.order, $scope.user).then((response)=>{
      $scope.newOrder = response;
      swal('Your order has been placed!');
      $state.go('home');
    });
  };


})
