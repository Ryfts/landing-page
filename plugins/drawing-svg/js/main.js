(function(){
	$(window).on('load',function(){


		// options

		/*
			type: delayed | oneByOne | async
			dashGap: number
			duration: number
			start: 'inViewport'
		*/

		/*$('#business').animateIcon();*/

		/*window.example1 = new Vivus('example1', {type: 'delayed', duration: 140, dashGap: 20, start: 'inViewport'});
    	window.example2 = new Vivus('example2', {type: 'oneByOne', duration: 140, dashGap: 20, start: 'inViewport'});
    	window.example3 = new Vivus('example3', {type: 'async', duration: 140, dashGap: 20, start: 'inViewport'});
    	window.example4 = new Vivus('example4', {type: 'delayed', duration: 140, dashGap: 20, pathTimingFunction: Vivus.EASE, animTimingFunction: Vivus.EASE, start: 'inViewport'});
    	window.example5 = new Vivus('example5', {type: 'async', duration: 100, dashGap: 20, start: 'inViewport'});
    	window.example6 = new Vivus('example6', {type: 'oneByOne', duration: 100, dashGap: 20, start: 'inViewport'});
    	window.example7 = new Vivus('example7', {type: 'delayed', duration: 100, dashGap: 20, start: 'inViewport'});*/
		


		// for demo navigation

		/*$('.items span').on('click',function(){
			var id = $(this).data('item');
			$('.items span').removeClass('active');
			$(this).addClass('active');
			$('body').attr('class', '');
			$('body').addClass(id);
			$('.ai-icons.active').addClass('out');
			$('.ai-icons').removeClass('active');
			$('#'+id).addClass('out');
			setTimeout(function(){
				$('#'+id).addClass('active');
				$('.ai-icons').removeClass('out');
				resetDemo(id);
			}, 500);
		});*/

		/*var resetDemo = function(id){

			if( id == 'variations' ) return false;

			$( '#' + id + ' svg').each(function(){
				var iconVar = $(this)[0].id.replace( '-', '' );
				window['tc'+iconVar].reset().play();
			});

		};*/
		var inView = false;
		var animateOnce = false;
		var animateOnce2 = false;
        $(window).scroll(function(){
            // This is then function used to detect if the element is scrolled into view
            function elementScrolled(elem)
            {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
            }
            // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
            if( elementScrolled('#drawing-icons') ) {
				if ( inView === false && animateOnce === false) {
                    inView = true;
                    $('#drawing-icons').animateIcon();
                    animateOnce = true;
                }
            } else {
                inView = false;
			}

			/*if( elementScrolled('#roadmap-icons') ) {
				if ( inView === false && animateOnce2 === false) {
                    inView = true;
                    $('#roadmap-icons').animateIcon();
                    animateOnce2 = true;
                }
            } else {
                inView = false;
			}*/
        });

	});

})();