window.onload = () => {
  const canvas = document.getElementById('mainCanvas');
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  function drawDiamond(startX, startY, side, color) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX - (side / 2), startY + (side / 2));
    ctx.lineTo(startX, startY + side);
    ctx.lineTo(startX + (side / 2), startY + (side / 2));
    ctx.fillStyle = color;
    ctx.fill();
  }

  function drawDiamondPattern(startX, startY, side, scale, color1, color2) {
    // main diamond
    drawDiamond(startX, startY, side, scale % 2 == 0 ? color2 : color1);

  }

  drawDiamondPattern(100, 0, 200, 3, 'orange', 'teal');

  // main
  //drawDiamond(100, 0, 200, 'orange');
  // top
  drawDiamond(100, 0, 200 / 3, 'teal');
  // left
  drawDiamond(100 / 3, 100 * (2 / 3), 200 / 3, 'teal');
  // center
  drawDiamond(100, 100 * (2 / 3), 200 / 3, 'teal');
  // right
  drawDiamond(100 + (200 / 3), 100 * (2 / 3), 200 / 3, 'teal');
  // bottom
  drawDiamond(100, 400 / 3, 200 / 3, 'teal');
}
