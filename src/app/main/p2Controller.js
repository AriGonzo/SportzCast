'use strict';

angular.module('sportzCast')
  .controller('Page2Controller', function ($scope, $state) {
    $state.transitionTo('home')
  });
