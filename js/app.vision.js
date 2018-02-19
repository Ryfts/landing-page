function Vision() {
    $('.vision-type-1').typewrite({
        trim: true,
        'callback': function() {
            $('.vision-type-1').css('color', '#00a4e4');
        }
    });


    setTimeout(function() {
        $('.vision-type-2').typewrite({
            trim: true,
            'callback': function () {
                $('.vision-type-2').css('color', '#00a4e4');
            }
        });
    }, 2900);

    setTimeout(function() {
        $('.vision-type-3').typewrite({
            trim: true,
            'callback': function () {
                $('.vision-type-3').css('color', '#00a4e4');
            }
        });
    }, 3900);

    setTimeout(function() {
        $('.vision-type-4').typewrite({
            trim: true,
            'callback': function () {
                $('.vision-type-4').css('color', '#00a4e4');
            }
        });
    }, 5800);
}