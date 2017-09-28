$(document).ready(function() {
    'use strict';
//Scroll REveal
    window.sr = ScrollReveal({ reset: true,
                                scale: 0.7,
                                duration: 800,
                                mobile: false,
                                distance: '30px'
                            });
    sr.reveal('#logo');
    sr.reveal('#drawing-icons > div');
    sr.reveal('.overlay-black');
    sr.reveal('.flex-row');
    sr.reveal('.section-title');
    sr.reveal('#distribution');
    sr.reveal('.info-table');
    sr.reveal('.rise-up li');
    sr.reveal('#roadmap-icons');
    sr.reveal('.about-us-text');
    sr.reveal('.embed-container');
    sr.reveal('.ico-progress');
    sr.reveal('.input--hoshi');
// logo
    function fixLogo() {
        var background = $('.grcs_background_content').height();
        var percentage = 1.8;
        if ( $( window ).width() < 960 ) {
            percentage = 2.2;
        }
        $('#logo img').height(background/percentage);
        $('#logo').css('visibility','visible');
    }
    fixLogo();

    setTimeout(function(){
        var canvasTop = $('.time_circles canvas').offset().top;
        var numbersTop = $('.time_circles div').offset().top;
        var canvasHeight = $('.time_circles canvas').height();
        var numbersHeight = $('.time_circles div').height();
        $('.time_circles div').attr('style','top:-' + ( canvasHeight - canvasHeight/2 + numbersHeight*0.6 ) + 'px !important');
    }, 500);

        $( window ).resize(function() {
            fixLogo();
            var canvasTop = $('.time_circles canvas').offset().top;
            var numbersTop = $('.time_circles div').offset().top;
            var canvasHeight = $('.time_circles canvas').height();
            var numbersHeight = $('.time_circles div').height();
            $('.time_circles div').attr('style','top:-' + ( canvasHeight - canvasHeight/2 + numbersHeight*0.6 ) + 'px !important');
        });
// Youtube script
    /*var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    document.body.appendChild(tag);

    var player;

    onYouTubeIframeAPIReady = function () {
        player = new YT.Player('player', {
            height: '532',
            width: '945',
            videoId: 'babI5wBoexg',  // youtube video id
            playerVars: {
                'autoplay': 0,
                'rel': 0,
                'showinfo': 0,
                'controls': 0
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }

    var p = document.getElementById ("player");
    $(p).hide();

    var t = document.getElementById ("thumbnail");
    t.src = "https://i.ytimg.com/vi_webp/babI5wBoexg/maxresdefault.webp";

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('.start-video').fadeIn('normal');
        }
    }

    $(document).on('click', '.start-video', function () {
        $(this).hide();
        $("#player").show();
        $("#thumbnail_container").hide();
        player.playVideo();
    });*/
/////////////////////////////////////////////////////////////////
// Smooth Scrolling
/////////////////////////////////////////////////////////////////
    // Add scrollspy to <body>
    /*$("body").niceScroll({
    cursorcolor:"#5abed5",
    cursorwidth:"10px"
    });*/

    /*$("html").niceScroll();
    $('.nicescroll-rails').remove();*/

    /*$('body').scrollspy({
        target: ".navbar",
        offset: 50
    });*/

    // Add smooth scrolling on all links inside the navbar
    $("#main-menu a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    
/////////////////////////////////////////////////////////////////
// Parallax 
/////////////////////////////////////////////////////////////////   
    
    function simpleParallax() {
        //This variable is storing the distance scrolled
        var scrolled = $(window).scrollTop() + 1;

        //Every element with the class "scroll" will have parallax background 
        //Change the "0.3" for adjusting scroll speed.
        $('.scroll').css('background-position', '50%' + -(scrolled * 0.3) + 'px');
    }
    //Everytime we scroll, it will fire the function
    $(window).on('scroll', function() {
        simpleParallax();
    }); 
    

/////////////////////////////////////////////////////////////////
// Wow 
/////////////////////////////////////////////////////////////////   
    
//new WOW().init();

/////////////////////////////////////////////////////////////////
// Token sale
/////////////////////////////////////////////////////////////////
    $(".timer").TimeCircles({
        count_past_zero: false,
        bg_width: 0.1,
        fg_width: 0.05,
        direction: "Counter-Clockwise",
        time: {
            Days: {show: true, text: "Days", color: "#5abed5"},
            Hours: {show: true, text: "Hours", color: "#5abed5"},
            Minutes: {show: true, text: "Minutes", color: "#5abed5"},
            Seconds: {show: true, text: "Seconds", color: "#5abed5"}
        }
    });

    $('.bonus-timer').countdown('2017-12-30', function(event) {
        $(this).html(event.strftime('%-H hours %-M minutes and %-S seconds'));
    });

/////////////////////////////////////////////////////////////////
// Particles (animated background)
/////////////////////////////////////////////////////////////////

    particlesJS.load('particleCanvas-Orange', 'assets/particles-orange.json');
    //particlesJS.load('particleCanvas-Blue', '/assets/particles-blue.json');

/////////////////////////////////////////////////////////////////
// High charts
/////////////////////////////////////////////////////////////////
    Highcharts.chart('distribution', {
        chart: {
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Token distribution'
        },
        tooltip: {
            pointFormat: '<b>{point.percentage}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage}%',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            colorByPoint: true,
            data: [{
                name: 'Marketing',
                y: 40
            }, {
                name: 'Research & Development',
                y: 30
            }, {
                name: 'Freerolls and bounties',
                y: 25
            }, {
                name: 'Founders',
                y: 5
            }]
        }],
        credits: {
            enabled: false
        }
    });

    /* Load Canvas math */
    /*canvas = document.getElementById("canvas-math");
    ctx = canvas.getContext("2d");
    drawLines();*/

     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
        
}); // Close Function


$( window ).load(function() {
    var canvasTop = $('.time_circles canvas').offset().top;
    var numbersTop = $('.time_circles div').offset().top;
    var canvasHeight = $('.time_circles canvas').height();
    var numbersHeight = $('.time_circles div').height();
    $('.time_circles div').attr('style','top:-' + ( canvasHeight - canvasHeight/2 + numbersHeight*0.6 ) + 'px !important');
});