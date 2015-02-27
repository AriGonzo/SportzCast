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
      })
      .state('results', {
        url: '/results',
        controller: 'ResultsCtrl as results',
        templateUrl: 'app/views/resultsPage.html'
      })
      .state('schoolPage', {
      	url: '/schoolPage',
      	controller: 'SchoolCtrl as school',
      	templateUrl: 'app/views/schoolPage.html'
      });

    $urlRouterProvider.otherwise('/');
  })
;
