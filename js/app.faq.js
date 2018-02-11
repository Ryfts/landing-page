function Faq() {


	var $faqTogglers = $('.faq-element-toggle'),
		$faqElements = $('.faq-element'),
		unfoldClass = 'unfolded';

	$('#faq-show-more').click(showAllFaqElements);


	function faqToggler( $element ) {
		$($element).parents('.faq-element').toggleClass( unfoldClass );
		resize();
	}

	function hideElement($element) {
		$($element).hide();
	}

	function showAllFaqElements() {
		$('.faq-element').show();
        $('#faq-show-more').hide();
	}

	function resize() {
		for ( var n = 0; n < $faqElements.length; n++ ) {
			// Display only first X lines in both columns
			var numberOfDisplayedFaqs = 4;
			if (n >= numberOfDisplayedFaqs && n < 8) {
				hideElement($faqElements[n]);
			}

            if (n >= 8 + numberOfDisplayedFaqs) {
                hideElement($faqElements[n]);
            }


                if ( !$($faqElements[n]).hasClass(unfoldClass) ) {
				$($faqElements[n]).find('.faq-element-content').height(0);
			} else {
				$($faqElements[n]).find('.faq-element-content').height( $($faqElements[n]).find('.faq-element-content-inner').outerHeight() );
			}
		}
	}


	$faqTogglers.on('click', function() {
		faqToggler( $(this) );
	});

	$(document).ready(function() {
		resize();
    });
	$(window).resize( resize );

}