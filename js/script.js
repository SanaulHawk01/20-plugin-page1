
// Jquery start

$(document).ready(function(){

	// Mixitup

	var mixer = mixitup("#mxt", {
      animation: {
      duration: 300
      }
	});

	// wow

	wow = new WOW(
	  {
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       0,          // default
	  mobile:       true,       // default
	  live:         true        // default
	  }
	  )
	wow.init();

	// aos

	AOS.init({
	  duration: 1000,
	});

	// counterup

	$('.counter').counterUp({
	  delay: 10,
	  time: 2500
	});

	$(function () {
	  // preloader start
		$(window).load(function () {
	  	$("#loading").fadeOut(2000);
	  });
	  // preloader end
	});

});

// Jquery end