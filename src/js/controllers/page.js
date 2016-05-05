(function() {

  'use strict';

  angular
    .module('tempest')
    .controller('PageController', Controller);

  Controller.$inject = [
    '$http',
    '$stateParams'
  ];

  function Controller(
    $http,
    $stateParams
  ) {

    var vm = this;

    vm.pageID = $stateParams.id;

    $http.get('/api/pages/' + vm.pageID).then(function(res) {
      
      
      var dateTime = vm.pageID.split('-').slice(0, 5),
        link = vm.pageID.slice(17, vm.pageID.length);

      vm.data = res.data;
      vm.title = link.split('-').join(' ');
    });

    return vm;

  }

})();
