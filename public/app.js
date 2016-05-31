angular.module('janet', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './customers/views/homeView.html',
                controller: 'homeCtrl'
            })

            .state('productDetails', {
                url: '/productDetails',
                templateUrl: './customers/views/productDetailsView.html',
                controller: 'productDetailsCtrl'
            })

            .state('cart', {
                url: '/cart',
                templateUrl: './customers/views/cartView.html',
                controller: 'cartCtrl'
            })

            .state('settings', {
                url: '/settings',
                templateUrl: './customers/views/customerSettingsView.html',
                controller: 'settingsCtrl'
            })

// ADMIN SIDE VIEWS =============================
            .state('admin', {
                url: '/admin',
                templateUrl: './admin/adminView.html',
                controller: 'adminCtrl'
            })

            .state('adminProductView', {
                url: '/adminProductView',
                templateUrl: './admin/adminProductView.html',
                controller: 'adminCtrl'
            });

  });
