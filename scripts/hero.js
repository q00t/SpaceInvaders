function hero(x, y) {

    var img = document.getElementById("heroSpriteSheet");
    var numberOfFrames = 2;

    this.mX = x;
    this.mY = y;
    this.frameIndex = Math.floor(Math.random() * numberOfFrames);

    this.setX = function (x) {
        this.mX = x;
    }

    this.getX = function () {
        return this.mX;
    }

    this.setY = function (y) {
        this.mY = y;
    }

    this.getY = function () {
        return this.mY;
    }

    this.fire = function () {
        return new bomb(mX, mY);
    }

    this.drawHero = function (context) {
        context.drawImage(img, (16 * this.frameIndex), 0, 16, 16, this.mX, this.mY, 16, 16);

        if (this.frameIndex == 0) {
            ++this.frameIndex;
        } else {
            --this.frameIndex;
        }
    }

    this.moveLeft = function (leftEdge) {
        this.mX -= 10;
        if (this.mX < leftEdge) {
            this.mX = leftEdge;
        }
    }

    this.moveRight = function (rightEdge) {
        this.mX += 10;
        if (this.mX > rightEdge) {
            this.mX = rightEdge;
        }
    }

}