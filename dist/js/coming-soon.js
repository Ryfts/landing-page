function validateEmail( string ) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( string );
}


(function SubscribeToNewsletter() {

	var $form = $('#subscription-form'),
		$subscriptionInput = $form.find('input'),
		$subscriptionSubmit = $form.find('button');

	//validation func
	function validation() {
		return validateEmail( $subscriptionInput.val() );
	}

	//submit button enabler
	function submitButtonEnabler() {
		if ( validation() ) {
			$subscriptionSubmit.removeAttr('disabled');
		} else {
			$subscriptionSubmit.attr('disabled', 'disabled');
		}
	}


	//validates input on each key release event
	$subscriptionInput.on('keyup', submitButtonEnabler);

	//handles form submitting to mailchimp
	$form.ajaxChimp();



}());