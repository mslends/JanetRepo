angular.module('janet', ['ui.router', 'ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './customers/views/homeView.html',
                controller: 'homeCtrl',
                resolve: {
                  user: function(customerService, $state){
                          return customerService.currentUser().then(function(response){
                            return response;
                          }).catch(function(err) {
                            console.log(err);
                            return "no user found";
                          })
                        }
                  }
            })

            .state('productDetails', {
                url: '/productDetails/:productId',
                templateUrl: './customers/views/productDetailsView.html',
                controller: 'productDetailsCtrl',
                resolve: {
                  productInfo: function(productsService, $stateParams){
                    console.log('resolve', $stateParams.productId)
                    return productsService.getSingleProduct($stateParams.productId);
                  }
                }
            })

            .state('cart', {
                url: '/cart',
                templateUrl: './customers/views/cartView.html',
                controller: 'cartCtrl'
            })

            .state('settings', {
                url: '/settings',
                templateUrl: './customers/views/customerSettingsView.html',
                controller: 'settingsCtrl',
                resolve: {
                  user: function(customerService, $state){
                          return customerService.currentUser().then(function(response){
                            return response;
                          }).catch(function(err) {
                            console.log(err);
                          })
                        }
                  }
            })

// ADMIN SIDE VIEWS =============================
            .state('admin', {
                url: '/admin',
                templateUrl: './admin/views/adminView.html',
                controller: 'adminCtrl'
            });

  });
