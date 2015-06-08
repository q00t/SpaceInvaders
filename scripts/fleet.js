function fleet(numberOfShips, width, height) {
    this.mX = 0;
    this.mY = 0;

    this.mWidth = width;
    this.mHeight = height;

    this.mInvaders = [];

    for (count = 0 ; count < numberOfShips ; ++count) {
        var localInvader = new invader();
        localInvader.mX = count * 32;
        localInvader.mY = 0;
        this.mInvaders.push(localInvader);
    }

    this.getX = function () {
        return this.mX;
    }

    this.getY = function () {
        return this.mY;
    }

    this.getNumberOfInvaders = function () {
        return this.mInvaders.length;
    }

    this.drawFleet = function(context) {

        for (count = 0 ; count < this.mInvaders.length ; count++) {
            this.mInvaders[count].drawInvader(context);
        }

    }

}