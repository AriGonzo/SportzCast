'use strict';

angular.module('sportzCast')
  .controller('NavbarCtrl', function ($state) {

  		$(".navbar-nav li a").click(function(event) {
    		$(".navbar-collapse").collapse('hide');
  		});
  });
