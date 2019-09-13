//object
/*let bone = {
    x: 200,
    y: 200,
    speedX: 0,
    speedY: 0,
    width: 400,
    height: 40,
    image: undefined // you can add thing whenever you want
};*/

let bone = new Bone();

let dog = {
    x: 130,
    y: 140,
    width: 140,
    height: 140
};

let score = 0;
let lives = 3;
let grass = undefined;

function preload() {
    // draw no pasa hasta que no termina el preload
    // preload() runs once
    bone.image = loadImage("bone.png");
    dog.image = loadImage("dog.png");
    grass = loadImage("grass.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight); // crea el canvas al tamaño de la pantalla
    noStroke();
    console.log(bone); // to see all the information
    bone.width = bone.image.width * 0.1; // once they have calculated the width and height
    bone.height = bone.image.height * 0.1;
    dog.width = dog.image.width * 0.7; // once they have calculated the width and height
    dog.height = dog.image.height * 0.7;

    rectMode(CENTER);
}

function draw() {
    imageMode(CORNER);
    background(grass);
    // añadirlo para que vean el cuadrado al rededor de la imagen
    //rect(dog.x, dog.y, dog.width, dog.height);
    //rect(bone.x, bone.y, bone.width, bone.height);
    imageMode(CENTER);
    //Programar que el hueso se aleje cada vez que nos intentamos acercar
    //bone.x += bone.speedX;
    //bone.y += bone.speedY;
    bone.changeDirection();
    bone.followDog(dog);
    /*if (abs(dog.x - bone.x) > abs(dog.y - bone.y)) {
        if (dog.x - bone.x > 0) {
            bone.speedX = -1;
            bone.speedY = 0;
        } else {
            bone.speedX = 1;
            bone.speedY = 0;
        }
    } else if (abs(dog.x - bone.x) < abs(dog.y - bone.y)) {
        if (dog.y - bone.y > 0) {
            bone.speedX = 0;
            bone.speedY = -1;
        } else {
            bone.speedX = 0;
            bone.speedY = 1;
        }
       */

    // para que el perro rebote
    if (dog.x < 0) {
        dog.x += 10.5;
    }
    if (dog.x > width) {
        dog.x -= 10.5;
    }
    if (dog.y < 0) {
        dog.y += 10.5;
    }
    if (dog.y > height) {
        dog.y -= 10.5;
    }

    // arreglar cuando el hueso se sale de la pantalla
    // width es igual que windoWidth una vez que lo estableces en el canvas
    /*if (bone.x < 0 || bone.x > width || bone.y < 0 || bone.y > height) {
        lives -= 1;
        bone.x = random(0, windowWidth - bone.width);
        bone.y = random(0, windowHeight - bone.height);
    }*/

    bone.checkOutside();

    if (lives <= 0) {
        score = 0;
        lives = 3;
    }
    /*bone.x = bone.x + movementX; // + random(-10, 10);
    bone.y = bone.y + movementY; // + random(-10, 10);
    console.log(bone.x + "  " + bone.y);*/
    //añadir las imagenes
    //image(bone.image, bone.x, bone.y, bone.width, bone.height);
    bone.foto();
    image(dog.image, dog.x, dog.y, dog.width, dog.height);
    // te muestra el centro de la imagen
    //ellipse(dog.x, dog.y, 20, 20);
    //ellipse(bone.x, bone.y, 20, 20);

    // mover el perro con las flechas
    if (keyIsPressed && keyCode == LEFT_ARROW) {
        dog.x -= 10;
    } else if (keyIsPressed && keyCode == RIGHT_ARROW) {
        dog.x += 10;
    } else if (keyIsPressed && keyCode == UP_ARROW) {
        dog.y -= 10;
    } else if (keyIsPressed && keyCode == DOWN_ARROW) {
        dog.y += 10;
    }

    if (
        dog.x > bone.x - bone.width / 2 &&
        dog.x < bone.x + bone.width / 2 &&
        dog.y > bone.y - bone.height / 2 &&
        dog.y < bone.y + bone.height / 2
    ) {
        bone.x = random(0, windowWidth - bone.width);
        bone.y = random(0, windowHeight - bone.height);

        score += 1;
    }

    fill(255);
    textSize(30);
    text("Puntos: " + score, windowWidth - 200, 70);

    fill(255);
    textSize(30);
    text("Vidas: " + lives, windowWidth - 400, 70);
}
