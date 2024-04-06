// Creating snowflakes
function spawnAnimation(snowDensity = 200) {
  snowDensity -= 1;

  for (let i = 0; i < snowDensity; i++) {
    let board = document.createElement('i');
    board.className = "fas fa-snowflake animation";

    document.getElementById('ani').appendChild(board);
  }
}