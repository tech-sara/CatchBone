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

    followDog(pet) {
        if (abs(pet.x - this.x) > abs(pet.y - this.y)) {
            if (pet.x - this.x > 0) {
                this.speedX = -1;
                this.speedY = 0;
            } else {
                this.speedX = 1;
                this.speedY = 0;
            }
        } else if (abs(pet.x - this.x) < abs(pet.y - this.y)) {
            if (pet.y - this.y > 0) {
                this.speedX = 0;
                this.speedY = -1;
            } else {
                this.speedX = 0;
                this.speedY = 1;
            }
        }
    }
}
