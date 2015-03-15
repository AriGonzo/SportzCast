angular.module('sportzCast')
  .controller('CityCtrl', function ($state, $rootScope, SportzCastApi) {
  	var region = $rootScope.selectedState
  	this.cities = $rootScope.cities

  	$('.breadcrumbList').append("<li>> "+region+"</li>")
  	
  	this.citySelect = function(cityName){
    		$rootScope.selectedCity = cityName
    		$state.go('results')
  	}

  })