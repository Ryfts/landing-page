var $form = $('#mc-subscribe-form'),
	$responseBox = $('#mc-subscribe-response'),
	$loading = $('#mc-subscribe-loading'),
	$submitButton = $('#mc-subscribe-button'),
	originalSubmitButtonText = $submitButton.html();

$submitButton.on('click', function(event) {
	event.preventDefault();
	loading('init');
	var options = {
		success: always,
		error: always
	};
	$form.ajaxSubmit(options);
});

function loading(action) {
	if ( action == 'init' ) {
		//hidding $responseBox in case it was still visible
		$responseBox.fadeOut(0);
		//display loading text
		$submitButton.attr('disabled', 'disabled').html('Sending data...');
	} else if ( action == 'stop' ) {
		//reverting loading text
		$submitButton.removeAttr('disabled').html(originalSubmitButtonText);
	}
}

function always() {
	//because of CORS, we're getting always an error, even if the form have submitted the data properly to MC
	//so there is no way to know if it worked or not, the only thing we can do is to tell the user to check the email
	//for a confirmation email

	//stop loading
	loading('stop');

	//print response and show $responseBox
	$responseBox.fadeIn(300);
	$responseBox
		.find('p')
		.html('Check your inbox for a confirmation email ;)');
}