angular.module('sportzCast')
  .controller('SearchCtrl', function ($state, $rootScope, SportzCastApi) {
	  $rootScope.selectedCity = undefined
	  var self = this;
	  this.option =""
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
	  this.search = function(type, zip, cityId, name, sport, division, live){
	  	zip = zip || ""
	  	cityId = cityId || ""
	  	name = name || ""
	  	sport = sport || ""
	  	division = division || ""
	  	if(!live){ live = "" }
	  	$rootScope.selectedCity = {id: cityId.Id, name:cityId.Name}
	  	$rootScope.type = type
	  	
	  	$state.go('results')
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