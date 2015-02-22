'use strict';

angular.module('sportzCast', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'angularSmoothscroll'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as main'
      })
      .state('browse', {
      	url: '/browse',
      	templateUrl: 'app/views/browse.html',
      	controller: 'BrowseCtrl as browse'
      });

    $urlRouterProvider.otherwise('/');
  })
;
