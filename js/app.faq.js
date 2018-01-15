function Faq() {


	var $faqTogglers = $('.faq-element-toggle'),
		$faqElements = $('.faq-element'),
		unfoldClass = 'unfolded';


	function faqToggler( $element ) {
		$($element).parents('.faq-element').toggleClass( unfoldClass );
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


	$faqTogglers.on('click', function() {
		faqToggler( $(this) );
	});

	$(document).ready( resize );
	$(window).resize( resize );

}