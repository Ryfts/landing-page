/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-Revolution Slider
-Unit Gallery
-Skills
-Progress Bar Percentage
-Search Popup
-Smooth Scrolling
-Parallax
-Lightbox
-Wow
*/
$(document).ready(function() {
	'use strict';
	

/////////////////////////////////////////////////////////////////
// Skills
/////////////////////////////////////////////////////////////////

        $('.skills').on('inview', function() {
            $('.progress .progress-bar').css("width", function() {
                return $(this).attr("aria-valuenow") + "%";
            })
		});

/////////////////////////////////////////////////////////////////
// Progress Bar Percentage
/////////////////////////////////////////////////////////////////

		
			$('.progress-bar-percent').counterUp({
				delay: 10,
				time: 2000
			});
		 

/////////////////////////////////////////////////////////////////
// Search Popup
/////////////////////////////////////////////////////////////////


	$('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })


		
/////////////////////////////////////////////////////////////////
// Smooth Scrolling
/////////////////////////////////////////////////////////////////




	// Add scrollspy to <body>
	$('body').scrollspy({
		target: ".navbar",
		offset: 50
	});
	// Add smooth scrolling on all links inside the navbar
	$("#main-menu a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

	
/////////////////////////////////////////////////////////////////
// Parallax 
/////////////////////////////////////////////////////////////////	
	
    function simpleParallax() {
        //This variable is storing the distance scrolled
        var scrolled = $(window).scrollTop() + 1;

        //Every element with the class "scroll" will have parallax background 
        //Change the "0.3" for adjusting scroll speed.
        $('.scroll').css('background-position', '50%' + -(scrolled * 0.3) + 'px');
    }
    //Everytime we scroll, it will fire the function
    $(window).on('scroll', function() {
        simpleParallax();
    });	
	
	
	
	
/////////////////////////////////////////////////////////////////
// Lightbox 
/////////////////////////////////////////////////////////////////		
	
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
	});


/////////////////////////////////////////////////////////////////
// Wow 
/////////////////////////////////////////////////////////////////	
	
//new WOW().init();

/////////////////////////////////////////////////////////////////
// Token sale
/////////////////////////////////////////////////////////////////
    $(".timer").TimeCircles({
        count_past_zero: false,
		bg_width: 0.1,
		fg_width: 0.025,
        direction: "Counter-Clockwise",
		time: {
            Days: {show: !0, text: "Days", color: "#f6b559"},
            Hours: {show: !0, text: "Hours", color: "#f6b559"},
            Minutes: {show: !0, text: "Minutes", color: "#f6b559"},
            Seconds: {show: !0, text: "Seconds", color: "#f6b559"}
        },
	});

    $(".bonus-timer").TimeCircles({
        count_past_zero: false,
        time: {
            Days: {show: false, text: "Days", color: "#f6b559"},
            Hours: {show: true, text: "Hours", color: "#f6b559"},
            Minutes: {show: true, text: "Minutes", color: "#f6b559"},
            Seconds: {show: true, text: "Seconds", color: "#f6b559"}
        },
        display_circles: false,
    });

    var rangeSlider = document.getElementById('sale-slider');
    noUiSlider.create(rangeSlider, {
        start: [ 1500 ],
        range: {
            'min': [ 0 ],
            'max': [ 3000 ]
        },
		tooltips: true,
        format: {
            to: function ( value ) {
                return value + ' BTC';
            },
            from: function ( value ) {
                return value.replace(',-', '');
            }
        },
        pips: {
            mode: 'values',
            values: [0, 1000, 2000, 3000],
            density: 999
        },
		connect: 'lower'
    });

/////////////////////////////////////////////////////////////////
// Particles (animated background)
/////////////////////////////////////////////////////////////////

    particlesJS.load('particles-js', '../assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

}); // Close Function