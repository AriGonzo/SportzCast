'use strict';

angular.module('sportzCast', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'angularSmoothscroll'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
