angular.module('sportzCast')
  .controller('CityCtrl', function ($state, $rootScope, SportzCastApi, $stateParams) {
  	var region = $rootScope.selectedState
  	var baseUrl = SportzCastApi.url('geo')
  	var self = this;
  	this.cities = $rootScope.cities

  	if(region == undefined) {
  		region = $stateParams.region
  	}

  	if (this.cities == undefined){
  		self.cities = [];
  		SportzCastApi.get(baseUrl, region).then(function(data){
  			self.cities = data.Results
  		})
  	}

  	$('.breadcrumbList').append("<li>> "+region+"</li>")
  	
  	this.citySelect = function(cityId, cityName){
    		$rootScope.selectedCity = cityName
    		$state.go('results')
    		console.log(cityName)
    		console.log(cityId)
  	}

  });