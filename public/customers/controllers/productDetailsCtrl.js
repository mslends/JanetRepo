angular.module('janet').controller('productDetailsCtrl', function($scope, $stateParams, productsService, productInfo, cartService){


$scope.product = productInfo;


$scope.productId = $stateParams.productId;


// $scope.getSingleProduct = function(){
//   console.log("controller hit");
//   productsService.getSingleProduct($stateParams.productId).then(function(response){
//     $scope.products = response[0];
//
//
// });
// };


// COUNTDOWN CLOCK
function countdown(){
	var now = new Date();
	var eventDate = new Date($scope.product.endDate);

	var currentTiime = now.getTime();
	var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;


    if(d < 0) {
        $scope.disabled = true;
        $scope.buttonText = "YOU MISSED IT !";
        // $('.product-details-countdown').hide();
        h = '00';
        m = '00';
        s = '00';
        d = '0';
    }else {
        $scope.disabled = false;
        $scope.buttonText = "ADD TO BAG";
        // $('.product-details-countdown').show();
    }



    // console.log(document.getElementsByClassName("days"));
	document.getElementsByClassName("days")[0].textContent = d;
    document.getElementsByClassName("days")[1].textContent = d;
	document.getElementsByClassName("days")[0].innerText = d;
    document.getElementsByClassName("days")[1].innerText = d;

	document.getElementsByClassName("hours")[0].textContent = h;
    document.getElementsByClassName("hours")[1].textContent = h;

	document.getElementsByClassName("minutes")[0].textContent = m;
    document.getElementsByClassName("minutes")[1].textContent = m;

	document.getElementsByClassName("seconds")[0].textContent = s;
    document.getElementsByClassName("seconds")[1].textContent = s;

		setTimeout(countdown, 1000);


	}

		countdown();
// FAVORITES COUNTER


  $scope.productQty = 1;

  // add to cart function
  $scope.addToCart = (product, productQty)=>{
    cartService.addToCart(product, productQty);
    swal('Item has been added to your cart!');
  };








});
