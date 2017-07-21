var amount = 24;
var scale = 0;
var angle = 0;
var size = 30;

var children = project.activeLayer.children;

function onFrame(event) {
    scale = scale + 0.2;
    angle = angle + 6.5;

    if (event.count < amount) {
        var triangle = new Path.RegularPolygon(new Point(205,190), 3 , size);
        triangle.strokeColor = '#ff3196';
        triangle.strokeWidth = 1;

        triangle.scale(scale);
        triangle.rotate(angle);
    }

    rotate();
}

function rotate() {
    for (var i = 0; i < children.length; i++) {
        var path = children[i];
        path.rotate(0.05);
    }
}