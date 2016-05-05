(function() {

  'use strict';

  angular
    .module('tempest')
    .controller('PostController', Controller);

  Controller.$inject = [
    '$http',
    '$stateParams'
  ];

  function Controller(
    $http,
    $stateParams
  ) {

    var vm = this;

    vm.postID = $stateParams.id;

    $http.get('/api/posts/' + vm.postID).then(function(res) {
      
      var dateTime = vm.postID.split('-').slice(0, 5),
        link = vm.postID.slice(17, vm.postID.length);

      vm.data = res.data;
      vm.title = link.split('-').join(' ');
    });

    return vm;

  }

})();
