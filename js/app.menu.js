//requires hashCleanURL
//requires scrollManager

(function Menu() {

//init vars
	var $menuButton = $('.menu-visibility-switch'),
		$menuBox = $('#menu-box'),
		$menu = $menuBox.find('.header-menu.menu'),
		$menuElements = $menu.find('li'),
		$menuLinks = $('.local-link');

	var visibleClass = 'unfolded';
	var startingDelay = 0; //ms
	var delayIncrement = 0.1; //ms


//functions

	(function build() {
        dropdownMenuHandle();

		//adding incrementing transition delay to $menuElements
		for ( var n = 0; n < $menuElements.length; n++ ) {
			$($menuElements[n]).css('transition-delay', startingDelay + (delayIncrement * n) + 's' );
		}
	}());

	function dropdownMenuHandle() {
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
                $(this).toggleClass('open');
            }
        );
	}

	function toggleMenuVisiblityURL() {
		if ( window.location.hash == '#menu' ) {
			open();
		} else {
			close();
		}
	}

	function toggleMenuVisibility() {
		if ( $menuBox.hasClass( visibleClass ) ) {
			close();
			removeHash();
		} else {
			open();
			addHash();
		}
	}

		function open() {
			$menuBox.addClass( visibleClass );
		}

			function addHash() {
				history.pushState({}, 'Open menu', '#menu');
			}

		function close() {
			$menuBox.removeClass( visibleClass );
		}

			function removeHash() {
				history.pushState({}, 'Close menu', hashCleanURL() );
			}

	var temp_id = null,
		temp_hash = null,
		temp_offset = null;
	function nav( $clicked ) {

		//temp vars
		temp_hash = $clicked.attr('href');
		temp_id = temp_hash.substring(1, temp_hash.length);
		temp_offset = $('a.local[name="' + temp_id + '"').offset().top;

		//first close menu
		close();

		//exec scrollManager go to the href element
		scrollManager.go( temp_offset, false, function() {
			//updating url
			if ( history.pushState ) {
				history.pushState(null, null, temp_hash);
			} else {
				window.location.hash = temp_hash;
			}
		});			
	}


//events
	//open/close menu when button is clicked
	$menuButton.on('click', toggleMenuVisibility);

	//close menu when menu element is clicked
	$menuLinks.on('click', function() {
		nav( $(this) );
	});

	//open/close menu when backwards button is pressed
	$(window).on('popstate', toggleMenuVisiblityURL);

	//open/close menu according to url when document is ready
	$(document).ready(toggleMenuVisiblityURL);

}());