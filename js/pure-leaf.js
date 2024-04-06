// Creating leaves
function spawnAnimation(leafDensity = 200) {
  leafDensity -= 1;

  for (let i = 0; i < leafDensity; i++) {
    let board = document.createElement('img');
    board.className = "animation";
    board.src = "./resources/maple-leaf.png"

    document.getElementById('ani').appendChild(board);
  }
}