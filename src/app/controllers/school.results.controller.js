angular.module('sportzCast')
  .controller('SchoolResultsCtrl', function ($state, $rootScope, SportzCastApi) {
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
    if($rootScope.sport != "" || !$rootScope.sport){
      console.log($rootScope.sport)
      self.selectedSport = "&Sport=" + $rootScope.sport
    }
    if($rootScope.name !="" || !$rootScope.name){
      self.selectedName = "&School=" + $rootScope.name
      console.log(self.selectedName)
    }
    console.log($rootScope.searchParameter)
  	this.geoSearchParameter = $rootScope.searchParameter

    //avoids results page without context - reroute to search
  	if(!this.geoSearchParameter && !this.selectedCity && !this.selectedState){
  		$state.go('search')
  	}

    //arriving via geo-search
    this.cityOrSearch = ""

    if(this.selectedCity == "" || !this.selectedCity ) {
      self.cityOrSearch = this.geoSearchParameter
      $('.breadcrumbs').hide();
    } else {
      self.cityOrSearch = "CityId="+this.selectedCity.id
    }

    //API call based on route to results page
  	var baseUrl = SportzCastApi.url(this.selectedType)
  	SportzCastApi.get(baseUrl, 'search?', self.cityOrSearch, self.selectedName).
  		then(function(data){
  			self.resultList = data.Results
  			console.log(self.resultList)
  		})

  	this.selectGame = function(game){
      $rootScope.selectedGame = game
      $state.go('schoolPage',{school: game.SchoolSlug})
  	}

  })