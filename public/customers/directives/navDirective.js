angular.module('janet').directive('navDirective', function(){
  return {
    controller:'homeCtrl',
    restrict: 'E',
    templateUrl: './customers/views/navView.html',
    controller: 'navCtrl'
  }

})
