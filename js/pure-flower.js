// Creating flowers
function spawnAnimation(flowerDensity = 200) {
  flowerDensity -= 1;

  for (let i = 0; i < flowerDensity; i++) {
    let board = document.createElement('img');
    board.className = "animation";
    board.src = "./resources/flower.png"

    document.getElementById('ani').appendChild(board);
  }
}