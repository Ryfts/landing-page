var apiUrl = "https://ryfts.io/multivest";

function MultivestWidget() {
    // slick slider - for demo purposes

    $('.slick-slider-container').slick({
        draggable: false,
        arrows: false
    });

    // .button?
    $('.widget-container .button-next').click(function() {
        $('.slick-slider-container').slick('slickNext');
    });

    // format data for needed format
    function formatDate(date, dayOnly = false) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var monthIndex = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

       var dateStr = `${day}. ${monthNames[monthIndex]}, ${year}.`;
        if (!dayOnly) {
          dateStr += `${hours}:${minutes}:${seconds}`
        }

        return  dateStr;
    }

    function hideAllIcoRelatedEleemnts() {
        $('#ico').hide();
        // $('a[href="#ico"]').parent().hide();
    }

    var filtered = false;
    var now = new Date().getTime() / 1000;
    var startDate = 1541533288;
    var endDate = 1548028799;
    var targetDate;

    if (now < startDate) {
        // ICO not started yet
        // return hideAllIcoRelatedEleemnts();

        $(".countdown").html(formatDate(new Date(startDate * 1000), true));

        targetDate = startDate;
        if (filtered === false) {
            $('.slick-slider-container').slick('slickFilter', '.before');
            filtered = true;
        } else {
            $('.slick-slider-container').slick('slickUnfilter');
            filtered = false;
        }
    }
    else if (now > endDate) {
        if (filtered === false) {
            $('.slick-slider-container').slick('slickFilter', '.after');
            filtered = true;
        } else {
            $('.slick-slider-container').slick('slickUnfilter');
            filtered = false;
        }
    }
    else{
        runProgress();
        targetDate = endDate;
        if (filtered === false) {
            $('.slick-slider-container').slick('slickFilter', '.during');
            filtered = true;
        } else {
            $('.slick-slider-container').slick('slickUnfilter');
            filtered = false;
        }
    }

    // timer
    function updateTimer(targetDate) {

        var remainingSeconds = ~~(targetDate - new Date().getTime() / 1000);
        var remainingTime = {
            "D": remainingSeconds / (60 * 60 * 24),
            "H": (remainingSeconds % (60 * 60 * 24)) / (60 * 60),
            "M": (remainingSeconds % (60 * 60)) / 60,
            "S": remainingSeconds % 60
        };

        var str = "";
        for (var i in remainingTime) {
            var timeString = remainingTime[i] < 10 ? "0" + ~~remainingTime[i] : ~~remainingTime[i];
            str += timeString + " : ";
        }
        // Store the result in the element
        $(".countdown").html(str.substring(0, str.length - 2));
    }

    // Update the timer every 1 second
    // if the ICO is running
    if (startDate <= now && endDate >= now) {
        setInterval((function () {
            updateTimer(targetDate)
        }), 1000);
    }

    var ethAddres;
    var btcAddress;
    var stats;
    var exchange;
    var walletAddress;
    var btcPressed = false;
    var etcPressed = false;

    // subscribe email before
    $("#emailBefore").next().on('click', function () {
        var email = $("#emailBefore").val();
        $.ajax({
            type: 'post',
            url: apiUrl + '/ico/email',
            data: JSON.stringify({
                "email": email
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log("Email before was send");
            }
        });
    });

    // subscribe email after
    $("#emailAfter").next().on('click', function () {
        var email = $("#emailAfter").val();
        $.ajax({
            type: 'post',
            url: apiUrl + '/ico/email',
            data: JSON.stringify({
                "email": email
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log("Email after was send");
            }
        });
    });

    $.when(
        $.get(apiUrl + "/ico/exchange").then(function(data) {
            return data;
        }),
        $.get(apiUrl + "/ico/stats").then(function(data) {
            return data;
        })
    ).then(function (result1, result2) {
        exchange = result1;
        stats = result2;

        $('.progressbar .pbaranim span').text(`${ parseInt(stats.tokensSold).toLocaleString() } RFT SOLD`);
        $('.btc span').text(stats.collected.btc);
        $('.ether span').text(stats.collected.eth);
        $('.progress').attr("aria-valuenow", (stats.soldPercentage * 100));
        // run progressbar animation
        runProgress();
    });

  $('.resume-box .button').on('click', function () {
    $('.slick-slider-container').slick('slickNext');
  });

  $('.drgStep1 .button, .drgStep5 .button').on('click', function () {
    $('.slick-slider-container').slick('slickNext');
  });

    // get wallet address
    $('.drgStep3 .button-next').on('click', function () {
        walletAddress = $('.drgStep3 input').val();

        if (!/^(0x)?[0-9a-f]{40}$/i.test(walletAddress)) {
            // Check if it has the basic requirements of an address
            alert("Ethereum address is invalid");

            event.stopImmediatePropagation();

            return false;
        }

        $('.slick-slider-container').slick('slickNext');
    });

    // put ethereum address for copy
    $('.drgStep4 .etc').on('click', function () {
        etcPressed = true;

        // get ethereum address
        $.ajax({
            type: 'post',
            url: apiUrl + '/ico/addresses/eth',
            data: JSON.stringify({
                "address": walletAddress,
                "acceptedTermsAndConditions": true
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                ethAddres = data.icoAddress;

                $('#toPayMethod').text("ETH");
                $('.eth-payment').removeClass("hidden");
                $('.drgStep5 .copy-container input').val(ethAddres);

                $('.drgStep5 .qr').attr('src', '').css('display', 'none') // TODO: Display QR for ethereum

                // $('.slick-slider-container').slick('slickNext');
            }
        });
    });

    function getQRUrl(address, amount, label, message) {
        var url = "https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=bitcoin:" + address +
            "?amount=" + amount + "%26label=" + label + "%26message=" + message;

        return url;
    }

    // put bitcoin address for copy
    $('.drgStep4 .btc').on('click', function () {
        // get bitcoin address
        $.ajax({
            type: 'post',
            url: apiUrl + '/ico/addresses/btc',
            data: JSON.stringify({
                "address": walletAddress,
                "acceptedTermsAndConditions": true
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                btcAddress = data.icoAddress;

                btcPressed = true;
                $('#toPayMethod').text("BTC");
                $('.drgStep5 .copy-container input').val(btcAddress);

                // $('.slick-slider-container').slick('slickNext');

                var url = getQRUrl(btcAddress, 0, "Ryfts ICO", "Contribute BTC");

                $('.drgStep5 .qr').attr('src', url).css('display', 'block');
                $('.qr-container').removeClass("hidden");
            }
        });
    });

    $('#amount').on('keyup', function () {
        if (/^\d+[.]?\d*$/.test($(this).val()) == false) {
            $('#toPay').val(0);
            return;
        }
        var value = new BigNumber($(this).val());
        if (value.valueOf() === '0') {
            $('#toPay').val(0);
            return;
        }
        let total;
        if (etcPressed) {
            total = new BigNumber($(this).val()).div(new BigNumber(stats.tokensPerEth)).toFixed(8);
        } else {
            total = new BigNumber($(this).val()).div(new BigNumber(stats.tokensPerBTC)).toFixed(8);

            var url = getQRUrl(btcAddress, total, "Ryfts ICO", "Contribute BTC");

            $('.drgStep5 .qr').attr('src', url);
        }
        $('#toPay').val(total);
    });

    $('#toPay').on('keyup', function () {
        if (/^\d+[.]?\d*$/.test($(this).val()) == false) {
            $('#amount').val(0);
            return;
        }
        var value = new BigNumber($(this).val());
        if (value.valueOf() === '0') {
            $('#amount').val(0);
            return;
        }
        let total;
        if (etcPressed) {
            total = new BigNumber($(this).val()).mul(new BigNumber(stats.tokensPerEth)).toFixed(0);
        } else {
            total = new BigNumber(stats.tokensPerBTC).mul(new BigNumber($(this).val())).toFixed(0);

            var url = getQRUrl(btcAddress, value, "Ryfts ICO", "Contribute BTC");

            $('.drgStep5 .qr').attr('src', url);
        }

        $('#amount').val(total);
    });

};

document.addEventListener("DOMContentLoaded", function (event) {
// copy to clipboard
    var el = document.getElementById('copy-button');
    if (el) {
        document.querySelector('.copy').addEventListener('click', function (event) {
            document.querySelector('.copy-this').select();
            document.execCommand('copy');
        })
    }

    //exec widget script on document ready
    //MultivestWidget();

});

// animate on visible
function isElementInViewport(el) {
    if (el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            el.classList.add('animate')
        );
    }
}

window.onscroll = window.onload = () => {
    isElementInViewport(document.querySelector('.progress'));
};


// create progressbar animation
function runProgress() {
    $('.progressbar .progress').css("width", 0);
    setTimeout(function () {
        $('.progressbar .progress').css("width",
            function () {
                return $(this).attr("aria-valuenow") + "%";
            }
        )
    }, 100)
}

// verify before email
$("#emailBefore").on('keyup', function () {
    if(isValidEmailAddress($(this).val())){
        $("#emailBefore").next().attr('disabled', false);
    } else {
        $("#emailBefore").next().attr('disabled', true);
    }

});

// verify after email
$("#emailAfter").on('keyup', function () {
    if(isValidEmailAddress($(this).val())){
        $("#emailAfter").next().attr('disabled', false);
    } else {
        $("#emailAfter").next().attr('disabled', true);
    }
});

// verify email by pattern
function isValidEmailAddress(value) {
    var pattern = /^[a-zA-Z0-9.!#$%&‘*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return pattern.test(value);
};