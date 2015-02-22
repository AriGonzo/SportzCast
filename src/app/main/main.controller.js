angular.module('sportzCast')
  .controller('MainCtrl', function ($state) {
    //NavBar/Footer fade
    $(document).ready(function() {
      $('.navbar').hide();
      $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 500) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
    var BV = new $.BigVideo();
    BV.init();
    if (Modernizr.touch){
      BV.show('http://i.imgur.com/3m1OkPZ.jpg')
    } else {
      BV.show([
        { type: 'video/mp4', src:"assets/images/scoreboard.mp4" },
        { type: 'video/webm', src:"assets/images/scoreboard.webm"},
        ],{ambient:true});
    }
  this.stopVid = function(){
    BV.getPlayer().dispose()
    $state.go('browse')
    $('.navbar').show();
    }  
    
  });

  
