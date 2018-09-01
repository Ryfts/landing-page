function Home() {

	//put year
	function writeYear() {
		$('.year').html( new Date().getFullYear() );
	}

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document. documentElement.clientWidth)
        );
    }


	$(document).ready(function() {
		var animatedVisionSection = false;
		writeYear();

		//app.about
		About();
        if (!animatedVisionSection && isElementInViewport(document.querySelector('.vision'))) {
            Vision();
            animatedVisionSection = true;
        }
		//app.advantages
		advantagesAndBlockchain();
		//app.contact
		SubscribeToNewsletter();
		//app.cover
		//Cover();
		//app.faq
		Faq();
		//app.token-sale
		//TokenSale();
		//app.token
		Token();
		//app.widget
    if (typeof MultivestWidget === 'function') {
      MultivestWidget();
    }

        $(window).on('resize scroll', function() {
            //app.vision
            if (!animatedVisionSection && isElementInViewport(document.querySelector('.vision'))) {
                Vision();
                animatedVisionSection = true;
            }
        });
	});


}

if ( $('body').attr('id') == 'home-page' ) {
	Home();
}
