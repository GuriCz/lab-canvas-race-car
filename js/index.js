window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  var img = new Image();
  img.src = "images/road.png";
  var carImg = new Image();
  carImg.src = "images/car.png";


  function startGame() {
    let counter = 0;
    const theCanvas = document.getElementById("canvas");
    const ctx = theCanvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 400, 800);
    ctx.drawImage(carImg, carX, carY, 40, 80);
    function updateCounter() {
      counter++;
      document.getElementById("counter").innerHTML = "Counter: " + counter; // update the content of the div element
    }

    //Set in what interval the obstacles come etc-------------------------
    setInterval(() => {
      ctx.drawImage(img, 0, 0, 400, 800);
      ctx.drawImage(carImg, carX, carY, 40, 80);
      obstacles.forEach((obstacle, index) => {
        obstacle.y += 5;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        if (obstacle.y > 800) {
          obstacles.splice(index, 1);
          updateCounter();
        }
      });
    }, 10);
    //--------------------------------------------------------------------
    let obstacles = [];

    function spawnObstacle() {
      const maxWidth = 200;
      const minWidth = 50;
      const maxObstX = 220;
      const minObstX = 0;
      const obstacleX = Math.floor(Math.random() * (maxObstX - minObstX + 1)) + minObstX;
      const obstacleWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
      obstacles.push({
        x: obstacleX,
        y: 0,
        width: obstacleWidth,
        height: 50,
      });
      console.log(obstacleX);
    }
    setInterval(spawnObstacle, 1500);
  }
};



let carX = 200;
let carY = 500;

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (key) {
    case "ArrowLeft":
      // Left pressed
      carX -= 30;
      break;
    case "ArrowRight":
      // Right pressed
      carX += 30;
      break;
    case "ArrowUp":
      // Up pressed
      carY -= 30;
      break;
    case "ArrowDown":
      // Down pressed
      carY += 30;
      break;
  }
});