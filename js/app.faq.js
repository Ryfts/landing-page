function Faq() {


	var $faqContainer = $('#faq'),
		$faqTogglers = $('.faq-element-toggle'),
		$faqElements = $('.faq-element'),
		$faqElementsHiddenByDefault = $('.faq-element.hidden-by-default'),
		$faqShowMoreButton = $('#faq-show-more'),
		$faqShowLessButton = $('#faq-show-less'),

		unfoldClass = 'unfolded',
		hideDefaultsClass = 'hide-defaults',
		hiddenByDefaultClass = 'hidden-by-default';


	function faqToggler( $element ) {
		$($element).parents('.faq-element').toggleClass( unfoldClass );
		resize();
	}

	function hideElement($element) {
		$($element).hide();
	}

	function init() {
		//$faqContainer.addClass( hideDefaultsClass );
		toggleElementsVisibility();
		resize();
	}

	function resize() {
		for ( var n = 0; n < $faqElements.length; n++ ) {
			if ( !$($faqElements[n]).hasClass(unfoldClass) ) {
				$($faqElements[n]).find('.faq-element-content').height(0);
			} else {
				$($faqElements[n]).find('.faq-element-content').height( $($faqElements[n]).find('.faq-element-content-inner').outerHeight() );
			}
		}
	}

	function toggleElementsVisibility() {
		if ( $faqContainer.hasClass( hideDefaultsClass ) ) {
			$faqContainer.removeClass( hideDefaultsClass );
			$faqElementsHiddenByDefault.fadeIn(300);
		} else {
			$faqContainer.addClass( hideDefaultsClass );
			$faqElementsHiddenByDefault.fadeOut(300);
		}
		toggleButtonVisibility();
	}

	function toggleButtonVisibility() {
		if ( $faqContainer.hasClass( hideDefaultsClass ) ) {
			$faqShowLessButton.fadeOut(100, function() {
				$faqShowMoreButton.fadeIn(100);
			});
		} else {
			$faqShowMoreButton.fadeOut(100, function() {
				$faqShowLessButton.fadeIn(100);
			});
		}
	}



	//events

	$faqTogglers.on('click', function() {
		faqToggler( $(this) );
	});

	$faqShowMoreButton.on('click', function() {
		toggleElementsVisibility();
	});

	$faqShowLessButton.on('click', function() {
		toggleElementsVisibility();
	});

	$(window).resize( resize );

	//exec resize on document.ready
	init();

}