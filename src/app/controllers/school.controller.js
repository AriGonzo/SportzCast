angular.module('sportzCast')
  .controller('SchoolCtrl', function ($state, $stateParams, SportzCastApi, $rootScope) {
  	$('.seperator').show();
    var self = this;
    this.game = $rootScope.selectedGame;

  	//API call
  	var baseUrl = SportzCastApi.url('schools');
  	this.schoolInfo = {};

  	SportzCastApi.get(baseUrl,$stateParams.school).then(function(data){
  		self.schoolInfo = data
  		$('.schoolBanner').css({"background-color":self.schoolInfo.PrimaryColor})
  		$('.schoolBanner').css({"color":self.schoolInfo.SecondaryColor})
      console.log(self.schoolInfo.Twitter)
  		if (!self.schoolInfo.Sponsor){
        self.schoolInfo.Sponsor = {}
        self.schoolInfo.Sponsor.FallBack = "AdSense"
      }
      console.log(self.schoolInfo)

  	})


    //TwitterBot Code - working on this
    
    // this.getTweets = function(){
      
    // }

    // $('.twitterFeed').append('<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>')

    // this.getTweets();
    
    // var getTweets = function(){
   //    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
   //  }

  });