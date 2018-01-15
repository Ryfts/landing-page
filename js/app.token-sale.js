function TokenSale() {

	var $SVGProgress = $('#token-sale .countdown-progress'),
		$SVGStatic = $('#token-sale .countdown-static');

	var resizingTimeout = null,
		resizingDuration = 100,
		resizingLoopAuthorization = true;

	var availableSpace = null,
		SVGRadio, SVGCenter, SVGBorderWidth, SVGPerimeter;

	var timeLeft = null,
		secondsLeft = null,
		absoluteStartTime = convertToTimestamp('December 10, 2017 12:00:00'), //ms //1512907200000,
		absoluteEndTime   = convertToTimestamp('January 10, 2018 12:00:00'), //ms //1515585600000,
		absoluteTimeSpan  = absoluteEndTime - absoluteStartTime; //ms

	var countDownInterval = null;
	var temp_ratios = {},
		temp_percents = {};


	//countdown
	function countdown() {
		//init vars
		var temp_timespan = null,
			temp_timeRemaining = null;

		//start interval
		countDownInterval = setInterval(function() {
			//updating
			//getting current timestamp
			var d = new Date().getTime(); //ms

			//if current time is within absoluteTime
			if ( d > absoluteStartTime && d < absoluteEndTime ) {
				//absolute time from the absolute start to the absolute end
				temp_timespan = {
					timestamp: absoluteTimeSpan,
					human: returnRemainingTime( absoluteEndTime, absoluteStartTime )
				};
				//time remaining from now until the absolute end
				temp_timeRemaining = {
					timestamp: absoluteEndTime - d,
					human: returnRemainingTime( absoluteEndTime )
				}
				//update countdown percent
				updateCountdownPercents( temp_timespan, temp_timeRemaining);
				//update countdown numbers
				updateCountdownNumbers( temp_timeRemaining );
				//update progress bar
				applyPercent();
			}


		}, 1000);
	}
		//this function updates data-percent of corresponding .countdown-progress element
		function updateCountdownPercents( absoluteTime, remainingTime ) {
			//calculating ratios
			temp_ratios = {
				days: absoluteTime.human[0] / remainingTime.human[0],
				hours: absoluteTime.human[1] / remainingTime.human[1],
				minutes: 60 / remainingTime.human[2],
				seconds: 60 / remainingTime.human[3]
			};
			//applying ratios
			if ( !temp_ratios.days ) { // == 0
				temp_percents.days = 0;
			} else {
				temp_percents.days = 100 / temp_ratios.days;
			}
			if ( !temp_ratios.hours ) { // == 0
				temp_percents.hours = 0;
			} else {
				temp_percents.hours = 100 / temp_ratios.hours;
			}
			if ( !temp_ratios.minutes ) { // == 0
				temp_percents.minutes = 0;
			} else {
				temp_percents.minutes = 100 / temp_ratios.minutes;
			}
			if ( !temp_ratios.seconds ) { // == 0
				temp_percents.seconds = 0;
			} else {
				temp_percents.seconds = 100 / temp_ratios.seconds;
			}
			//update days
			$('.countdown-days .countdown-progress').attr('data-percent', 100 - temp_percents.days );
			//update hours
			$('.countdown-hours .countdown-progress').attr('data-percent', 100 - temp_percents.hours );
			//update minutes
			$('.countdown-minutes .countdown-progress').attr('data-percent', 100 - temp_percents.minutes );
			//update seconds
			$('.countdown-seconds .countdown-progress').attr('data-percent', 100 - temp_percents.seconds );
		}

		//this function updates the .countdown-number of corresponding .countdown-data element
		function updateCountdownNumbers( remainingTime ) {
			//update days
			$('.countdown-days .countdown-number').html( parseInt(remainingTime.human[0]) );
			//update hours
			$('.countdown-hours .countdown-number').html( parseInt(remainingTime.human[1]) );
			//update minutes
			$('.countdown-minutes .countdown-number').html( parseInt(remainingTime.human[2]) );
			//update seconds
			$('.countdown-seconds .countdown-number').html( parseInt(remainingTime.human[3]) );
		}


	//resize SVG elements
	function resizeSVG() {
		//all the SVG elements have the same size by CSS, and they are square
		availableSpace = $($SVGProgress[0]).width();
		//getting SVGProgress Border Width
		SVGBorderWidth = parseInt( $($SVGProgress[0]).css('stroke-width') );
		//gettin center and radio
		SVGRadio = (availableSpace / 2) - (SVGBorderWidth / 2);
		SVGCenter = availableSpace / 2;
		//calc perimeter
		SVGPerimeter = calcPerimeter();
		//resize SVGProgress
		$SVGProgress.find('circle').attr({
			'r': SVGRadio,
			'cx': SVGCenter,
			'cy': SVGCenter
		});
		//resizing perimeter
		$SVGProgress.css({
			'stroke-dasharray': SVGPerimeter
		});
		//update progress bar
		applyPercent();

		//we will use the same radio as SVG Progress element since its border is thicker, and also same center
		//resize SVGStatic
		$SVGStatic.find('circle').attr({
			'r': SVGRadio,
			'cx': SVGCenter,
			'cy': SVGCenter
		});
		//resizing perimeter
		$SVGStatic.css({
			'stroke-dasharray': SVGPerimeter
		});
	}

		//gets perimeter
		function calcPerimeter() {
			return 2 * Math.PI * SVGRadio;
		}

		//applies data-percent to the length of the line
		function applyPercent() {
			for ( var n = 0; n < $SVGProgress.length; n++ ) {
				$($SVGProgress[n]).css({
					'stroke-dashoffset': '-' + ( SVGPerimeter * parseInt( $($SVGProgress[n]).attr('data-percent') ) / 100 ) + 'px'
				});
			}
		}



	//init functions
	$(document).ready(function() {
		countdown();
		resizeSVG();
	});
	$(window).resize(function() {
		if ( resizingTimeout ) {
			resizingLoopAuthorization = false; //breaking loops
			clearTimeout(resizingTimeout);
			resizingTimeout = null;
		}
		resizingLoopAuthorization = true; //enabling loop again
		resizingTimeout = setTimeout(resizeSVG, resizingDuration);
	});

	$('body').on('click', function() {
		if ( countDownInterval ) {
			clearInterval( countDownInterval );
			countDownInterval = null;
		} else {
			countdown();
		}
	});


}