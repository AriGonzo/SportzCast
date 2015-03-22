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
        abstract: true,
        templateUrl: 'app/views/browse.html',
        controller: 'BrowseCtrl as browse'
      })
      .state('browse.states', {
        url: '/browse',
        template: '<ui-view/>' 
      })  
      .state('cities', {
        url: '/browse/:region',
        templateUrl: 'app/views/cities.html',
        controller: 'CityCtrl as cty'
      })
      .state('results', {
        url: '/results',
        controller: 'ResultsCtrl as results',
        templateUrl: 'app/views/resultsPage.html'
      })
      .state('schoolPage', {
      	url: '/schools/:school',
      	controller: 'SchoolCtrl as school',
      	templateUrl: 'app/views/schoolPage.html'
      })
      .state('search', {
        url: '/search',
        controller: 'SearchCtrl as search',
        templateUrl: 'app/views/geoResults.html'
      });
    $urlRouterProvider.otherwise('/');
  })
.config(function ($locationProvider) {
  $locationProvider.html5Mode(true)
})
