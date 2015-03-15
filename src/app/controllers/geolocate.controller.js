angular.module('sportzCast')
  .controller('GeoLocateCtrl', function ($state) {
	  var self = this;

	  $(document).ready(function() {	
	  	$('.navbar').show();
	    $('#navLogo').show();
	    $('.seperator').show();
	  });

	  navigator.geolocation.getCurrentPosition(function(position) {
    	self.lat = position.coords.latitude
    	self.long = position.coords.longitude
    	console.log(self.lat)
    	console.log(self.long)
		})




  });