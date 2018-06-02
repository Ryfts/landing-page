var animation = bodymovin.loadAnimation ({
	container: document.getElementById('ryfts-anim'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'json/ryfts-header-anim.json'
});

function Cover() {

	//this code is not being called in app.home.js because we want the cover to be smaller
	//i'm keeping the code so just in case we decide to make it full screen again
	//we just have to call Cover() ;)

	var $cover = $('#cover'),
		$svg = $('#ryfts-anim');

	var containerRatio,
		imageRatio = 1920 / 977,
		expansionMethod = 'contain';


	function resize() {
		getContainerRatio();
		//coverResize();
		svgBackgroundCover();
	}

	function init() {
		getContainerRatio();
		//coverResize();
		svgBackgroundCover();
	}


	function getAvailableSpace() {
		return [ $cover.width(), $cover.height() ]
	}

	function coverResize() {
		if ( expansionMethod == 'cover' ) {
			//setting up to window height
			$cover.height( $(window).innerHeight() );
		} else if ( expansionMethod == 'contain' ) {
			//setting up to window width / imageRatio (just the required space)
			$cover.height( $(window).innerWidth() / imageRatio );
		}
	}

	function getContainerRatio() {
		containerRatio = getAvailableSpace()[0] / getAvailableSpace()[1];
	}


	function svgBackgroundCover() {



		function adjustWidth() {
			$svg.width( getAvailableSpace()[0] );
		}

		function adjustHeight() {
			$svg.height( getAvailableSpace()[1] );
		}

		function calcWidth() {
			if ( imageRatio < 1 ) {
				$svg.width( $svg.height() / imageRatio );
			} else {
				$svg.width( $svg.height() * imageRatio );
			}
		}

		function calcHeight() {
			if ( imageRatio < 1 ) {
				$svg.height( $svg.width() * imageRatio );
			} else {
				$svg.height( $svg.width() / imageRatio );
			}
		}


		if ( expansionMethod == 'cover' ) {
			if ( imageRatio < containerRatio ) {
				adjustWidth();
				calcHeight();
			} else if ( imageRatio > containerRatio ) {
				adjustHeight();
				calcWidth();
			} else {
				adjustWidth();
				adjustHeight();
			}
		} else {
			if ( imageRatio > containerRatio ) {
				adjustWidth();
				calcHeight();
			} else if ( imageRatio < containerRatio ) {
				adjustHeight();
				calcWidth();
			} else {
				adjustWidth();
				adjustHeight();
			}
		}


	}


	$(document).ready(init);
	$(window).resize(resize);

}
