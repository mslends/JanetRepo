angular.module('janet').directive('navDirective', function(){
  return {
    restrict: 'E',
    templateUrl: './customers/views/navView.html',
    controller: 'navCtrl'
  }

})
