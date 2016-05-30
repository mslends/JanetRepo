"use strict";

angular.module("janet", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {});

angular.module("janet").controller("adminCtrl", function ($scope) {});

angular.module("janet").service("adminService", function ($http) {});

angular.module("janet").controller("cartCtrl", function ($scope) {});

angular.module("janet").controller("homeCtrl", function ($scope) {});

angular.module("janet").controller("loginSignupCtrl", function ($scope) {});

angular.module("janet").controller("productDetailsCtrl", function ($scope) {});

angular.module("janet").directive("footerDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./customers/views/footerView.html"
  };
});

angular.module("janet").directive("loginSignupDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./customers/views/loginSignupView.html"
  };
});

angular.module("janet").directive("navDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./customers/views/navView.html"
  };
});

angular.module("janet").directive("productDetailsDirective", function () {
  return {
    restrict: "E",
    templateUrl: "./customers/views/productDetailsView.html"
  };
});

angular.module("janet").service("cartService", function ($http) {});

angular.module("janet").service("customerService", function ($http) {});

angular.module("janet").service("productsService", function ($http) {});