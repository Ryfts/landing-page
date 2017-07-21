var canvas;
var ctx;
var canvasWidth = 250;
var canvasHeight = 250;

var circleR = 125;
var timeout = 0;
var often = 20;


function drawLines() {
    ctx.translate(canvasWidth/2, canvasHeight/2);
    for (var i = 0; i < 15; i++) {
        for (var a = -45; a <= 45; a+=often) {
            setTimeout("drawTimeout("+a+");",100 * timeout);
            timeout++;
        }
    }
}
function drawTimeout(a){
    ctx.beginPath();
    ctx.moveTo(0,circleR);
    var radians = Math.PI/180*a;
    var x = (circleR * Math.sin(radians)) / Math.sin(Math.PI/2 - radians);
    ctx.lineTo(x,0);

    if (Math.abs(a) == 45) {
        ctx.strokeStyle="rgb(255,255,255)";
        ctx.lineWidth=1;
    } else if (a == 0) {
        ctx.strokeStyle="rgb(200,200,200)";
        ctx.lineWidth=0.5;
    } else {
        ctx.strokeStyle="#ff3196";
        ctx.lineWidth=0.2;
    }
    ctx.stroke();
    ctx.rotate((Math.PI/180)*15);
}