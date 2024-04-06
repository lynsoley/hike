// Creating planets
function spawnAnimation(planetDensity = 200) {
  planetDensity -= 1;

  for (let i = 0; i < planetDensity; i++) {
    let board = document.createElement('img');
    board.className = "animation";
    board.src = "./resources/planet-earth.png"

    document.getElementById('ani').appendChild(board);
  }
}