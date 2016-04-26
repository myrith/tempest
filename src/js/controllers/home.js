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
    })

    return vm;

  };

})();
