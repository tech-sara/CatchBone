class Bone {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.speedX = 0;
        this.speedY = 0;
        this.width = 400;
        this.height = 40;
        this.image = undefined;
    }

    checkOutside() {
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            lives -= 1;
            this.x = random(0, windowWidth - this.width);
            this.y = random(0, windowHeight - this.height);
        }
    }
    changeDirection() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    foto() {
        image(this.image, this.x, this.y, this.width, this.height);
    }

    followDog(dog) {
        if (abs(dog.x - this.x) > abs(dog.y - this.y)) {
            if (dog.x - this.x > 0) {
                this.speedX = -1;
                this.speedY = 0;
            } else {
                this.speedX = 1;
                this.speedY = 0;
            }
        } else if (abs(dog.x - this.x) < abs(dog.y - this.y)) {
            if (dog.y - this.y > 0) {
                this.speedX = 0;
                this.speedY = -1;
            } else {
                this.speedX = 0;
                this.speedY = 1;
            }
        }
    }
}
