'use strict';

angular.module('sportzCast')
  .controller('NavbarCtrl', function ($scope) {
  	$('.navbar').hide();

  	$(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 500) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
      });
  });
