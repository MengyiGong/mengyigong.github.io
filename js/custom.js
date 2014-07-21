(function($) { 
	"use strict";
	
(function($) {
$(function() {
jQuery('#loopedSlider').prepend("<a href='#' class='previous'>&lt;</a><a href='#' class='next'>&gt;</a>");
	jQuery('#loopedSlider').loopedSlider({
		autoHeight: 500
	});
});
});



// for banner height js
var windowWidth = $(window).width();
    var windowHeight =$(window).height();
    $('.banner').css({'width':windowWidth ,'height':windowHeight -"60" });
	




// Somth page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -60
        }, 1000);
        return false;
      }
    }
  });
});







}(jQuery));
