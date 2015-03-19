angular.module('sportzCast')
  .controller('ResultsCtrl', function ($state, $rootScope, SportzCastApi) {
    window.scrollTo(0,0)
    $(document).ready(function() {  
      $('.navbar').show();
      $('#navLogo').show();
      $('.seperator').show();
    });
    
  	var self = this
  	this.resultList = []
  	this.selectedState = $rootScope.selectedState
    this.selectedType = $rootScope.type;
  	this.selectedCity = $rootScope.selectedCity
  	this.geoSearchParameter = $rootScope.searchParameter

    //avoids results page without context - reroute to search
  	if(!this.geoSearchParameter && !this.selectedCity && !this.selectedState){
  		$state.go('search')
  	}

    //arriving via geo-search
    this.cityOrSearch = ""
    if(!this.selectedCity) {
      self.cityOrSearch = this.geoSearchParameter
      $('.breadcrumbs').hide();
    } else {
      self.cityOrSearch = "CityId="+this.selectedCity.id
    }

    //API call based on route to results page
  	var baseUrl = SportzCastApi.url(this.selectedType)
  	SportzCastApi.get(baseUrl, 'search?', self.cityOrSearch).
  		then(function(data){
  			self.resultList = data.Results
  			angular.forEach(self.resultList, function(result){
  				var value = new Date(parseInt(result.StartDate.substr(6)))
  				result.stringDate = value.getMonth()+"/"+value.getDate()+"/"+value.getFullYear();
  			})
  		})

  	this.selectGame = function(game){
      $rootScope.selectedGame = game
      $state.go('schoolPage',{school: game.SchoolSlug})
  	}


  })