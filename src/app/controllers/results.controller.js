angular.module('sportzCast')
  .controller('ResultsCtrl', function ($state, $http, $filter, $rootScope) {
  	this.selectedState = $rootScope.selectedState
  	this.selectedCity = $rootScope.selectedCity
  });