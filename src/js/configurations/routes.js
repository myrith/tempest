(function() {

  'use strict';

  angular
    .module('tempest')
    .config(Configuration);

  Configuration.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
  ];

  function Configuration(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
  ) {


    $locationProvider.html5Mode(true)

    $stateProvider
      .state('base', {
        url: "",
        abstract: true,
        templateUrl: "/layouts/base.html",
        controller: 'BaseController as base'
      })
      .state('base.home', {
        url: "/",
        templateUrl: "/partials/home.html",
        controller: 'HomeController as home'
      })
      .state('base.error', {
        url: "/404",
        templateUrl: "/partials/404.html"
      });

    $urlRouterProvider.otherwise("/404");

  }

})();
