(function() {

  'use strict';

  angular
    .module('tempest')
    .directive('tempestPosts', Directive)
    .controller('TempestPostsController', Controller);

  Controller.$inject = [
    '$http'
  ];

  Directive.$inject = [];

  function Controller(
    $http
  ) {

    var vm = this;

    $http.get('/api/posts').then(function(res) {
      vm.list = res.data;
    });

    return vm;

  }

  function Directive(

  ) {

    var directive = {
      templateUrl: '/directives/posts.html',
      restrict: 'E',
      controller: 'TempestPostsController as posts'
    };

    return directive;

  }

})();
