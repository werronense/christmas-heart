window.onload = () => {
  const canvas = document.getElementById('mainCanvas');
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  function drawDiamond(startX, startY, sideLength, color) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX - (sideLength / 2), startY + (sideLength / 2));
    ctx.lineTo(startX, startY + sideLength);
    ctx.lineTo(startX + (sideLength / 2), startY + (sideLength / 2));
    ctx.fillStyle = color;
    ctx.fill();
  }

  drawDiamond(100, 0, 200, 'orange');
}
