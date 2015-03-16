angular.module('sportzCast')
  .controller('ResultsCtrl', function ($state, $rootScope, SportzCastApi) {
  	window.scrollTo(0,0)
  	var self = this

  	this.resultList = []
  	this.selectedState = $rootScope.selectedState
  	this.selectedCity = $rootScope.selectedCity
  	
  	if(!this.selectedCity || !this.selectedState){
  		$state.go('browse.states')
  	}
  	
		this.currentPage = 0
		this.pageSize = 2
		this.pageCount = 0
    var indexCount = 0

  	var baseUrl = SportzCastApi.url('games')
  	SportzCastApi.get(baseUrl, 'search', "?CityId="+this.selectedCity.id).
  		then(function(data){
  			self.resultList = data.Results
  			angular.forEach(self.resultList, function(result){
  				var value = new Date(parseInt(result.StartDate.substr(6)))
  				result.stringDate = value.getMonth()+"/"+value.getDate()+"/"+value.getFullYear();
  			})
				self.numberOfPages = function(){
    		    return Math.ceil(self.resultList.length/self.pageSize);                
   		 	}
   		 	self.pageCount = self.numberOfPages();
  			console.log(self.resultList)
  		})

    // this.myPagingFunction = function(){
    //   SportzCastApi.get(baseUrl, 'search', "?CityId="+this.selectedCity.id, "&index="+indexCount, "&limit=2").
    //     then(function(data){
    //       console.log(data.Results)
    //       self.resultList.push(data.Results)
    //     })
    // }

  	this.selectGame = function(game){
      $rootScope.selectedGame = game
      $state.go('schoolPage',{school: game.SchoolSlug})
  	}


  })

	.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});