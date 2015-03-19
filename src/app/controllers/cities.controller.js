angular.module('sportzCast')
  .controller('CityCtrl', function ($state, $rootScope, SportzCastApi, $stateParams) {
    var self = this;
    var region = $rootScope.selectedState
  	var baseUrl = SportzCastApi.url('geo')
  	this.cities = $rootScope.cities

    //allows ability to deep link to cities in state
  	if(!region) {
  		region = $stateParams.region
  	}


  	if(!this.cities) {
  		self.cities = [];
  		SportzCastApi.get(baseUrl, region, '?limit=100000').then(function(data){
  			self.cities = data.Results
  		})
  	}

  	$('.breadcrumbList').append("<li>> "+region+"</li>")
  	
  	this.citySelect = function(cityId, cityName){
    		$rootScope.selectedCity = {id: cityId, name:cityName}
    		$rootScope.selectedState = region
        $rootScope.type = "games"
    		$state.go('results')
      }

  });