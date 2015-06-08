var mFleet = new fleet(5, 0, 0);
var mHero = new hero(400 - 8, 570);

var canvas = document.getElementById("invaderCanvas");
var ctx = canvas.getContext("2d");

window.setInterval(refresh, 1000);

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        mHero.moveLeft();
    }
    else if (event.keyCode == 39) {
        mHero.moveRight();
    }
});

function refresh() {
    ctx.clearRect(0, 0, 800, 600);
    mFleet.drawFleet(ctx);
    mHero.drawHero(ctx);
}