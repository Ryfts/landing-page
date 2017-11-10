(function FullHeight() {

	var $fullHeightContainers = $('.full-height');
	var wh = window.innerHeight;

	var DEFAULT = {
		padding: 120
	}


	function resize() {
		//updating window height
		wh = $(window).height();
		//magic
		for ( var n = 0; n < $fullHeightContainers.length; n++ ) {
			if ( wh > calculateContentSize( $($fullHeightContainers[n]) ) + (DEFAULT.padding * 2) ) {
				$($fullHeightContainers[n]).css({
					'padding-top': ( wh - calculateContentSize( $($fullHeightContainers[n]) ) ) * 0.4, //40%
					'padding-bottom': ( wh - calculateContentSize( $($fullHeightContainers[n]) ) ) * 0.6  //60%
				});
			} else {
				$($fullHeightContainers[n]).css({
					'padding-top': DEFAULT.padding,
					'padding-bottom': DEFAULT.padding,
				});
			}
		}
	}

	function calculateContentSize( $element ) {
		return $element.find('.full-height-content').outerHeight();
	}

	$(document).ready( resize );
	$(window).resize(resize);

}());