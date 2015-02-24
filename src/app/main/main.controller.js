angular.module('sportzCast')
  .controller('MainCtrl', function ($state) {
    //NavBar/Footer fade
    $(document).ready(function() {
      $('#navSep').hide();
    });
    // var BV = new $.BigVideo();
    // BV.init();
    // if (Modernizr.touch){
    //   BV.show('http://i.imgur.com/3m1OkPZ.jpg')
    // } else {
    //   BV.show([
    //     { type: 'video/mp4', src:"assets/images/scoreboard.mp4" },
    //     { type: 'video/webm', src:"assets/images/scoreboard.webm"},
    //     ],{ambient:true});
    // }
  this.stopVid = function(){
    $state.go('browse')
    $('.navbar').show();
    }  
    
  });

  
