const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 550;
context.fillRect(0, 0, canvas.width, canvas.height);

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
    context.drawImage(this.image, -740, -650);
  }
}

const background = new Sprite({ position: { x: -740, y: -650 }, image: image });

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
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
}
animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      console.log("pressed w");
      break;
    case "a":
      console.log("pressed w");
      break;
    case "s":
      console.log("pressed w");
      break;
    case "d":
      console.log("pressed w");
      break;
  }
});
