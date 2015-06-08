function invader() {

    var img = document.getElementById("invaderSpriteSheet");
    var numberOfFrames = 2;

    this.mX = 0;
    this.mY = 0;
    this.frameIndex = Math.floor(Math.random() * numberOfFrames);

    this.getX = function () {
        return this.mX;
    }

    this.getY = function () {
        return this.mY;
    }

    this.fire = function () {
        return new bomb(mX, mY);
    }

    this.drawInvader = function (context) {
        context.drawImage(img, (16 * this.frameIndex), 0, 16, 16, this.mX, this.mY, 16, 16);
        
        if (this.frameIndex == 0) {
            ++this.frameIndex;
        } else {
            --this.frameIndex;
        }
    }

}