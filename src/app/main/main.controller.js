angular.module('sportzCast')
  .controller('MainCtrl', function ($state, $rootScope) {
    window.scrollTo(0,0)
    
    //clear out any rootScope settings
    $rootScope.selectedGame = ""
    $rootScope.name = ""
    $rootScope.sport = ""
    $rootScope.selectedState = ""
    $rootScope.searchParameter = undefined
    $rootScope.selectedCity = undefined

    $(document).ready(function() {
      $('.seperator').hide();
      $('#navLogo').hide();
    });

    this.showTab = function(tabName){
        $('.tab').hide();
        $('#panelButtons a li').removeClass('active')
        $(tabName).show().addClass('active');
    }

    this.getLocation = function(){
      navigator.geolocation.getCurrentPosition(function(position) {
        self.lat = position.coords.latitude
        self.long = position.coords.longitude
        $rootScope.sport = ""
        $rootScope.type = "games"
        $rootScope.searchParameter = "lat="+self.lat+"&lng="+self.long
        $state.go('results')
      })  
    }

  });

  
