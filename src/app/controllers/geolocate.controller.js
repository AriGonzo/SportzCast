angular.module('sportzCast')
  .controller('SearchCtrl', function ($state, $rootScope, SportzCastApi) {
	  var self = this;
	  this.lat = ""
	  this.long = ""

	  //clear out any rootScope settings
	  $rootScope.selectedState = ""
	  $rootScope.searchParameter = undefined
	  $rootScope.selectedCity = undefined
	  
	  this.option =""
	  this.states = [];
	  this.cities = [];
	  
	  $(document).ready(function() {	
	  	$('.navbar').show();
	    $('#navLogo').show();
	    $('.seperator').show();
	  });

	  //get States
	  var baseUrl = SportzCastApi.url('geo')
	  SportzCastApi.get(baseUrl, "?limit=51").then(function(data){
	  	self.states = data.Results
	  })

	  this.getCities = function(stateName){
	  	console.log(stateName)
	  	SportzCastApi.get(baseUrl, stateName, "?limit=100000").then(function(data){
	  		self.cities = data.Results
	  	})
	  }

	  this.advancedOptions = function(value){
	  	self.option = value;
	  }

	  //search query builder
	  this.search = function(type, zip, state, cityId, name, sport, division, live){
	  	zip = zip || ""
	  	cityId = cityId || ""
	  	name = name || ""
	  	sport = sport || ""
	  	division = division || ""
	  	if(!live){ live = "" }
	  	$rootScope.type = type
	  	console.log(sport)

	  	if(zip == "" && cityId== ""){
	  		$('#errorAlert').html("Please Provide a Zip or City/State!<br>")
	  	} else if (zip != "") {
	  		var baseUrl = SportzCastApi.url('geo')
		  	SportzCastApi.get(baseUrl, 'zips?', 'zip='+ zip +'&limit=1').then(function(data){
		  		self.lat = data.Results[0].Lat
		  		self.long = data.Results[0].Lng
		  		$rootScope.searchParameter = "lat="+self.lat+"&lng="+self.long 
		  		$state.go('results')
		  	})} else {
		  		$rootScope.sport = sport
		  		$rootScope.schoolName = name
		  		$rootScope.selectedCity = {id: cityId.Id, name:cityId.Name}
		  		$rootScope.selectedState = state
		  		$state.go('results')
		  	}
		  	
	  	}//end search();

  });