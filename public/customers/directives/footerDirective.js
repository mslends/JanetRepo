angular.module('janet').directive('footerDirective', function(){
  return {
    restrict: 'E',
    templateUrl: './customers/views/footerView.html',
    controller: 'footerCtrl'
  }

})
