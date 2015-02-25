angular.module('sportzCast')
  .controller('MainCtrl', function ($state) {
    $(document).ready(function() {
      $('.seperator').hide();
    });

    this.stopVid = function(){
        $state.go('browse')
        $('.navbar').show();
    }
    this.showTab = function(tabName){
        $('.tab').hide();
        $(tabName).show();
        
    }

  });

  
