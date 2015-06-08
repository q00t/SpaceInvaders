function bomb(x, y) {
    this.mX = x;
    this.mY = y;

    this.prototype.mSpeed = 1;

    this.prototype.getX = function () {
        return this.mX;
    }

    this.prototype.getY = function () {
        return this.mY;
    }

    this.prototype.updatePosition = function () {
        mY += mSpeed;
    }
}