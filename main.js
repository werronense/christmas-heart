window.onload = () => {
  const canvas = document.getElementById('mainCanvas');
  const ctx = canvas.getContext('2d');

  let canvasWidth = canvas.width = window.innerWidth;
  let canvasHeight = canvas.height = window.innerHeight;

  function drawDiamond(startX, startY, height, color) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX - (height / 2), startY + (height / 2));
    ctx.lineTo(startX, startY + height);
    ctx.lineTo(startX + (height / 2), startY + (height / 2));
    ctx.fillStyle = color;
    ctx.fill();
  }

  // compute the number of diamonds in each row for a given number of rows
  function computeRowLengths(n) {
    let rows = [];
    let columns = 1;

    for (let i = 1; i <= n; i++) {
      rows.push(columns);
      if (i < n / 2) { columns += 2 };
      if (i > n / 2) { columns -= 2 };
    }

    return rows;
  }

  // recursive function to draw the rows of diamonds
  function drawRows(x, y, height, rows, color) {
    for (let i = 0; i < rows[0]; i++) {
      drawDiamond(x + (height * i), y, height, color);
    }

    if (rows[1]) {
      if (rows[0] == rows[1]) {
        drawRows(x, y + height, height, rows.slice(1), color);
      } else if (rows[0] < rows[1]) {
        drawRows(x - height, y + height, height, rows.slice(1), color);
      } else {
        drawRows(x + height, y + height, height, rows.slice(1), color);
      }
    }
  }


  function drawDiamondPattern(startX, startY, height, scale, color1, color2) {
    // main diamond
    drawDiamond(
      startX,
      startY,
      height,
      scale % 2 ? color1 : color2
    );
    // rows
    drawRows(
      startX,
      startY,
      height / scale,
      computeRowLengths(scale),
      scale % 2 ? color2 : color1
    );
  }

  drawDiamondPattern(100, 0, 200, 5, 'orange', 'teal');
}
