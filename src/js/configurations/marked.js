(function() {

  'use strict';

  angular
    .module('tempest')
    .config(Configuration);

  Configuration.$inject = [
    'markedProvider'
  ];

  function Configuration(
    markedProvider
  ) {

    markedProvider.setOptions({
      gfm: true
    });

  }

})();
