angular.module('sportzCast')
  .controller('SearchCtrl', function ($state, $rootScope, SportzCastApi) {
	  $rootScope.selectedCity = undefined
	  var self = this;
	  this.option ="game"
	  this.states = [];
	  this.cities = [];
	  $(document).ready(function() {	
	  	$('.navbar').show();
	    $('#navLogo').show();
	    $('.seperator').show();
	  });
	  var baseUrl = SportzCastApi.url('geo')
	  SportzCastApi.get(baseUrl, "?limit=51").then(function(data){
	  	self.states = data.Results
	  	console.log(this.states)
	  })
	  this.getCities = function(stateName){
	  	console.log(stateName)
	  	SportzCastApi.get(baseUrl, stateName, "?limit=100000").then(function(data){
	  		self.cities = data.Results
	  		console.log(self.cities)
	  	})
	  }
	  this.advancedOptions = function(value){
	  	self.option = value
	  	console.log(self.option)
	  }
	  this.test = function(word){
	  	console.log(word)
	  }
	  this.getLocation = function(){
	  	navigator.geolocation.getCurrentPosition(function(position) {
	    	self.lat = position.coords.latitude
	    	self.long = position.coords.longitude
	    	$rootScope.searchParameter = "lat="+self.lat+"&lng="+self.long
	    	$state.go('results')
			})
	  }


  });