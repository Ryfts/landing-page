function Home() {

	//put year
	function writeYear() {
		$('.year').html( new Date().getFullYear() );
	}


	$(document).ready(function() {
		writeYear();

		//app.about
		About();
		//app.advantages
		advantagesAndBlockchain();
		//app.contact
		SubscribeToNewsletter();
		//app.cover
		Cover();
		//app.faq
		Faq();
		//app.token-sale
		//TokenSale();
		//app.token
		Token();
		//app.widget
		MultivestWidget();
	});


}

if ( $('body').attr('id') == 'home-page' ) {
	Home();
}