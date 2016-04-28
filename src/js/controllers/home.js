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

    return vm;

  };

})();
