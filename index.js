const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 550;

const collisionMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionMap.push(collisions.slice(i, i + 70));
}

class Boundary {
  static width = 48;
  static height = 48;
  constructor({ position }) {
    this.position = position;
    this.width = 48;
    this.height = 48;
  }
  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const boundaries = [];
const offset = {
  x: -500,
  y: -700,
};

collisionMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const image = new Image();
image.src = "./assets/Pellet Town.png";

const playerImage = new Image();
playerImage.src = "./assets/playerDown.png";

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }
  draw() {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: { x: offset.x, y: offset.y },
  image: image,
});
const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  context.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );

  if (keys.w.pressed && lastKey === "w") {
    background.position.y += 3;
  } else if (keys.a.pressed && lastKey === "a") {
    background.position.x += 3;
  } else if (keys.s.pressed && lastKey === "s") {
    background.position.y -= 3;
  } else if (keys.d.pressed && lastKey === "d") {
    background.position.x -= 3;
  }
}
animate();
let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
