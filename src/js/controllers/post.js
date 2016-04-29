(function() {

  'use strict';

  angular
    .module('tempest')
    .controller('PostController', Controller);

  Controller.$inject = [
    '$stateParams'
  ];

  function Controller(
    $stateParams
  ) {

    var vm = this;

    console.log($stateParams)

    return vm;

  }

})();
