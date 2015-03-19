angular.module('sportzCast')
  .controller('MainCtrl', function ($state, $rootScope) {
    $rootScope.searchParameter = undefined;
    $rootScope.selectedState = "";
    $rootScope.selectedCity = "";

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
        $rootScope.type = "games"
        $rootScope.searchParameter = "lat="+self.lat+"&lng="+self.long
        $rootScope.selectedCity = undefined;
        $state.go('results')
      })  
    }

  });

  
