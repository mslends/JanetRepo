angular.module('janet').controller('productDetailsCtrl', function($scope, $stateParams, productsService, productInfo, cartService){

  $scope.product = productInfo;
  $scope.productId = $stateParams.productId;


  $scope.getSingleProduct = function(){
    productsService.getSingleProduct($stateParams.productId).then(function(response){
      $scope.products = response[0];
    })
  }

  $scope.productQty = 1;

  // add to cart function
  $scope.addToCart = (product, productQty)=>{
    cartService.addToCart(product, productQty);
    alert('Item has been added to your cart!')
  };



// js countdown clock
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    //   var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        // 'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
    //   var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        // daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);
});
