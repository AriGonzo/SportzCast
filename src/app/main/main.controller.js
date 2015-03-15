angular.module('sportzCast')
  .controller('MainCtrl', function ($state) {
    
    $(document).ready(function() {
      $('.seperator').hide();
      $('#navLogo').hide();
    });

    this.showTab = function(tabName){
        $('.tab').hide();
        $('#panelButtons a li').removeClass('active')
        $(tabName).show().addClass('active');
    }

  });

  
