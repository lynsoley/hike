// Creating rainbows
function spawnAnimation(rainbowDensity = 200) {
  rainbowDensity -= 1;

  for (let i = 0; i < rainbowDensity; i++) {
    let board = document.createElement('img');
    board.className = "animation";
    board.src = "./resources/rainbow.png"

    document.getElementById('ani').appendChild(board);
  }
}