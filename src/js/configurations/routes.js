(function() {

  'use strict';

  angular
    .module('tempest')
    .config(Configuration);

  Configuration.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function Configuration(
    $stateProvider,
    $urlRouterProvider
  ) {

    $urlRouterProvider.otherwise("/");

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
      });

  }

})();
