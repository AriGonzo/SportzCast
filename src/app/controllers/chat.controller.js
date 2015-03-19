angular.module('sportzCast')
  .controller('ChatCtrl', function ($state, $stateParams, SportzCastApi, $rootScope) {
  	this.showTab = 1;

  	this.tabShow = function(tab){
  		this.showTab = tab
  		console.log(this.showTab)
  	}
  	

  	this.getTweets = function(){
  		console.log("fires")
  	}

  	this.getTweets();

  })