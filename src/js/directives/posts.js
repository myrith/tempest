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
      vm.list = [];

      res.data.forEach(function (post) {
        var dateTime = post.title.split('-').slice(0, 5),
          link = post.title.slice(17, post.title.length - 3);
        vm.list.push({
          title: link.split('-').join(' '),
          date: dateTime.slice(0,3).join('-'),
          time: dateTime.slice(3,5).join(':'),
          content: post.content,
          link: link,
          fullTitle: post.title.slice(0, post.title.length - 3)
        })
      });

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
