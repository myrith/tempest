(function() {

  'use strict';

  angular
    .module('tempest')
    .controller('HomeController', Controller);

  Controller.$inject = [
    '$http'
  ];

  function Controller(
    $http
  ) {

    var vm = this;

    $http.get('/api/posts').then(function(res) {
      vm.posts = res.data;
    });

    $http.get('/api/posts/2016-04-25-hello-world').then(function(res) {
      vm.content = res.data;
    })

    return vm;

  };

})();
