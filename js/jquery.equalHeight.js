(function EqualHeight() {
	//init vars
	var $boxes = $('.equal-height-box'),
		$outers, $inners;

	var outerClass = 'equal-height-outer',
		innerClass = 'equal-height-inner';

	var greater;

	var timeout = null,
		timeoutDuration = 150;


	function resizeElements() {
		for ( var n = 0; n < $boxes.length; n++ ) {
			$outers = $($boxes[n]).find( '.' + outerClass );
			$inners = $($boxes[n]).find( '.' + innerClass );

			//find greater inner
			greater = 0;
			for ( var i = 0; i < $inners.length; i++ ) {
				if ( $($inners[i]).outerHeight() > greater ) {
					greater = $($inners[i]).outerHeight();
				}
			}

			//assign height to outer
			$outers.height( greater );
		}
	}

	$(document).ready(resizeElements);
	$(window).resize(function() {
		if ( timeout ) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(resizeElements, timeoutDuration);
	});
}());