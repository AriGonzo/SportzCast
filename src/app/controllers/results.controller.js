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
    this.selectedType = $rootScope.type;
  	this.selectedState = $rootScope.selectedState
  	this.selectedCity = $rootScope.selectedCity
    if($rootScope.sport != ""){
      self.selectedSport = "&Sport=" + $rootScope.sport
      console.log(self.selectedSport)
    }
    if($rootScope.name !=""){
      self.selectedName = "&School=" + $rootScope.schoolName
      console.log(self.selectedName)
    }
  	this.geoSearchParameter = $rootScope.searchParameter

    //avoids results page without context - reroute to search
  	if(!this.geoSearchParameter && !this.selectedCity && !this.selectedState){
  		$state.go('search')
  	}

    //arriving via geo-search
    this.cityOrSearch = ""

    if(this.selectedCity == undefined) {
      self.cityOrSearch = this.geoSearchParameter
      $('.breadcrumbs').hide();
    } else {
      self.cityOrSearch = "CityId="+this.selectedCity.id
    }

    //API call based on route to results page
  	var baseUrl = SportzCastApi.url(this.selectedType)
  	SportzCastApi.get(baseUrl, 'search?', self.cityOrSearch, self.selectedName, self.selectedSport).
  		then(function(data){
        console.log(SportzCastApi.get(baseUrl, 'search?', self.cityOrSearch, self.selectedName, self.selectedSport))
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