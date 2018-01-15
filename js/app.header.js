//requires scrollManager

(function Header() {

	var $header = $('#header');

	var CONFIG = {
		resize: {
			timeout: null,
			timeoutDuration: 50
		},
		scroll: {
			timeout: null,
			timeoutDuration: 50
		}
	};



//header-hap copies height from header
	var $headerGap = $('#header-gap');
	function headerGap() {
		$headerGap.height( $header.outerHeight() );
	}




//show/hide logo
	var $cover = $('#cover'),
		$headerLogo = $('#header-logo-box'),
		visibleClass = 'visible';
	function headerLogoVisibility() {
		//show logo only when current scroll position is greater than #cover height
		if ( scrollManager.get() >= $cover.outerHeight() ) {
			show();
		} else if ( scrollManager.get() < $cover.outerHeight() ) {
			hide();
		}

		function show() {
			$headerLogo.addClass(visibleClass);
		}

		function hide() {
			$headerLogo.removeClass(visibleClass);
		}
	}








//exec funcs

	$(document).ready(function() {
		headerGap();
		headerLogoVisibility();
	});

	$(window).load(function() {
		headerGap();
		headerLogoVisibility();
	});

	$(window).resize(function() {
		if ( CONFIG.resize.timeout ) {
			clearTimeout( CONFIG.resize.timeout );
			CONFIG.resize.timeout = null;
		}
		CONFIG.resize.timeout = setTimeout(function() {
			headerGap();
			headerLogoVisibility();
		}, CONFIG.resize.timeoutDuration);
	});

	$(window).scroll(function() {
		//instant exec of this func
		headerLogoVisibility();
		if ( CONFIG.scroll.timeout ) {
			clearTimeout( CONFIG.scroll.timeout );
			CONFIG.scroll.timeout = null;
		}
		CONFIG.scroll.timeout = setTimeout(function() {
			headerGap();
		}, CONFIG.scroll.timeoutDuration);
	});


}());