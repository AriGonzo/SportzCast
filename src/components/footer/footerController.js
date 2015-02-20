'use strict';

angular.module('sportzCast')
  .controller('FooterCtrl', function ($scope) {
  	$('#footer').hide();

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