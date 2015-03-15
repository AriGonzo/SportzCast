angular.module('sportzCast')
  .controller('ResultsCtrl', function ($state, $http, $filter, $rootScope) {
  	this.selectedState = $rootScope.selectedState
  	this.selectedCity = $rootScope.selectedCity
  	if(this.selectedCity == undefined || this.selectedState == undefined){
  		$state.go('browse.states')
  	}
  	
  	$('.pagination').jqPagination({
    paged: function(page) {
        // do something with the page variable
    }
});
  });