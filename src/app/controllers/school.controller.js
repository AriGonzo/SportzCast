angular.module('sportzCast')
  .controller('SchoolCtrl', function ($state, $stateParams, SportzCastApi, $rootScope) {
  	$('.seperator').show();
  	var self = this;
  	this.game = $rootScope.selectedGame;
  	this.showTab = 1
  	this.tabShow = function(tab){
  		this.showTab = tab
  		console.log(this.showTab)
  	}
  	
  	console.log($stateParams)

  	//API call
  	var baseUrl = SportzCastApi.url('schools');
  	this.schoolInfo = {};

  	SportzCastApi.get(baseUrl,$stateParams.school).then(function(data){
  		self.schoolInfo = data
  		$('.schoolBanner').css({"background-color":self.schoolInfo.PrimaryColor})
  		$('.schoolBanner').css({"color":self.schoolInfo.SecondaryColor})
  		console.log(self.schoolInfo)
  	})

  });