//requires scrollManager

(function sectionAnimator() {

	var animatedClass = 'done',
		$sections = '', //initializing as an empty string so $sections.length returns false instead of an error
		currentScrollPosition;

	var CONFIG = {
		scroll: {
			timeoutFunc: null,
			timeoutDuration: 100,
			last: 0
		}
	};
	var temp_lastScrollDifference = null;

	var cutLoop = false;

	function updateSectionsArray() {
		$sections = $('#wrapper>section:not(".done")');
	}

	function animateSections() {
		//cutting previous loop (if any)
		cutLoop = true;

		//get current scroll position
		currentScrollPosition = scrollManager.get();

		//update sections selector
		updateSectionsArray();

		//reset cutLoop right before starting the loop
		cutLoop = false;

		//if any available section before current scroll position + offset, show it
		for ( var n = 0; n < $sections.length; n++ ) {
			//stopping loop execution anytime if triggered
			if ( cutLoop ) {
				return false;
			}
			//animating if currentScrollPosition + offset() is greater than current section offset
			if ( currentScrollPosition + offset() > $($sections[n]).offset().top ) {
				animate( $($sections[n]) );
			}
		}
	}

	function offset() {
		return $(window).height() - 20;
	}

	function animate( $element ) {
		$element.addClass( animatedClass );
	}


	//events
	//exec on window scroll
	$(window).scroll(function() {
		//while there are still sections to be "done"
		if ( $sections.length ) {
			//we will exec animateSections on windowScroll everytime a 1/4 of window height's distance has been scrolled or everytime after CONFIG.scroll.timeoutDuration since the last scroll event
			//whatever happens first

			//controlling 1/4 wh distance
			temp_lastScrollDifference = Math.abs( CONFIG.scroll.last - scrollManager.get() );
			if ( temp_lastScrollDifference > $(window).height() / 4 ) {
				animateSections();
			}

			//controlling CONFIG.scroll.timeoutDuration
			if ( CONFIG.scroll.timeoutFunc ) {
				clearInterval( CONFIG.scroll.timeoutFunc );
				CONFIG.scroll.timeoutFunc = false;
			}
			CONFIG.scroll.timeoutFunc = setTimeout(animateSections, CONFIG.scroll.timeoutDuration);
		}
	});

	//exec on window load
	$(window).load(animateSections);

	//exec on window resize
	$(window).resize(animateSections);

}());