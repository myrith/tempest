(function() {

  'use strict';

  angular
    .module('tempest')
    .controller('BaseController', Controller);

  Controller.$inject = [
  ];

  function Controller(
  ) {

    var vm = this;

    vm.title = "Tempest";

    return vm;

  }

})();
