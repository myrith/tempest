(function() {

  'use strict';

  angular
    .module('tempest')
    .controller('BaseController', Controller);

  Controller.$inject = [
    'APP'
  ];

  function Controller(
    APP
  ) {

    var vm = this;

    [
      'title',
      'subtitle',
      'author',
      'description',
      'company',
      'date'
    ].forEach(function(field) {
      vm[field] = APP[field];
    });

    return vm;

  }

})();
