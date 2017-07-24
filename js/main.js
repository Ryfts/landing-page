$(document).ready(function() {
	'use strict';

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
        }
	});

    $('.bonus-timer').countdown('2017-08-17', function(event) {
        $(this).html(event.strftime('%-H hours %-M minutes and %-S seconds'));
    });

/////////////////////////////////////////////////////////////////
// Particles (animated background)
/////////////////////////////////////////////////////////////////

    particlesJS.load('particleCanvas-Orange', '../assets/particles-orange.json');
    //particlesJS.load('particleCanvas-Blue', '../assets/particles-blue.json');

/////////////////////////////////////////////////////////////////
// High charts
/////////////////////////////////////////////////////////////////
    Highcharts.chart('distribution', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Token distribution'
        },
        tooltip: {
            pointFormat: '<b>{point.percentage}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage}%',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            colorByPoint: true,
            data: [{
                name: 'Marketing',
                y: 40
            }, {
                name: 'Research & Development',
                y: 35
            }, {
                name: 'Freerolls and bounties',
                y: 25
            }]
        }],
        credits: {
            enabled: false
        }
    });

    /* Load Canvas math */
    canvas = document.getElementById("canvas-math");
    ctx = canvas.getContext("2d");
    drawLines();

}); // Close Function