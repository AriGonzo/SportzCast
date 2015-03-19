angular.module('sportzCast')
  .controller('CityCtrl', function ($state, $rootScope, SportzCastApi, $stateParams) {
    var region = $rootScope.selectedState
  	var baseUrl = SportzCastApi.url('geo')
  	var self = this;
  	this.cities = $rootScope.cities

  	if(!region) {
  		region = $stateParams.region
  	}

  	if(!this.cities) {
  		self.cities = [];
  		SportzCastApi.get(baseUrl, region, '?limit=100000').then(function(data){
  			self.cities = data.Results
  			console.log(self.cities)
  		})
  		console.log(self.cities)
  	}

  	$('.breadcrumbList').append("<li>> "+region+"</li>")
  	
  	this.citySelect = function(cityId, cityName){
    		$rootScope.selectedCity = {id: cityId, name:cityName}
    		$rootScope.selectedState = region
        $rootScope.type = "games"
    		$state.go('results')
    		console.log(cityName)
    		console.log(cityId)
  	}

  });