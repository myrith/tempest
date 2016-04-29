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
        url: "/errors/404",
        templateUrl: "/partials/404.html"
      })
      .state('base.post', {
        url: "/posts/:id",
        templateUrl: "/partials/post.html",
        controller: 'PostController as post'
      })
      .state('base.page', {
        url: "/pages/:id",
        templateUrl: "/partials/page.html",
        controller: 'PageController as page'
      });

    $urlRouterProvider.otherwise("/errors/404");

  }

})();
