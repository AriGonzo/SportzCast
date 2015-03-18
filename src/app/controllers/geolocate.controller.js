angular.module('sportzCast')
  .controller('GeoLocateCtrl', function ($state, $rootScope) {
	  $rootScope.selectedCity = undefined
	  var self = this;

	  $(document).ready(function() {	
	  	$('.navbar').show();
	    $('#navLogo').show();
	    $('.seperator').show();
	  });

	  this.getLocation = function(){
	  	navigator.geolocation.getCurrentPosition(function(position) {
	    	self.lat = position.coords.latitude
	    	self.long = position.coords.longitude
	    	$rootScope.searchParameter = "lat="+self.lat+"&lng="+self.long
	    	$state.go('results')
			})
	  }


  });