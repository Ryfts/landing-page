function ScrollManager() {

	var $header = $('#header'),
		hh = null;
	var temp_difference = null;
	var CONFIG = {
		speed: 5, //px per ms
		ease: 'easeInOutExpo'
	};


	function get() {
		return $(window).scrollTop();
	}	


	function go( offset, ignoreHeaderHeight, cb ) {

		if ( ignoreHeaderHeight ) {
			hh = 0;
		} else {
			hh = $header.outerHeight();
		}

		$('html, body').animate({
			scrollTop: offset - hh
		}, getScrollSpeed( offset - hh, get() ), 'easeInOutExpo', function() {
			if ( cb ) { cb(); }
		});

	}


	function getScrollSpeed( target, current ) {
		temp_difference = Math.abs( target - current );
		return parseInt(temp_difference / CONFIG.speed); //ms
	}


	return {
		get: get,
		go: go
	}
}
var scrollManager = ScrollManager();