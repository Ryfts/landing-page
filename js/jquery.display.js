function display() {
	var $desktop = $('#desktop-witness'),
		$laptop = $('#laptop-witness'),
		$tablet = $('#tablet-witness'),
		$phone = $('#phone-witness');

	if ( $desktop.is(':visible') ) {
		return 'desktop';
	} else if ( $laptop.is(':visible') ) {
		return 'laptop';
	} else if ( $tablet.is(':visible') ) {
		return 'tablet';
	} else if ( $phone.is(':visible') ) {
		return 'phone';
	}
}