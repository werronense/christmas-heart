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


  function drawLobe(startX, startY, radius, color, side) {
    ctx.beginPath();
    ctx.arc(
      // adjust starting x coordinate to avoid slight gap
      startX + (side == "left" ? 0.5 : -0.5),
      // adjust starting y coordinate to avoid slight gap
      startY + 0.5,
      radius,
      (side == "left" ? (3 * Math.PI) / 4 : (5 * Math.PI) / 4),
      (side == "left" ? (7 * Math.PI) / 4 : Math.PI / 4),
      false
    );
    ctx.fillStyle = color;
    ctx.fill();
  }


  drawDiamondPattern(
    canvasWidth / 2,
    canvasHeight / 4,
    canvasHeight / 3,
    4,
    'fireBrick',
    'forestGreen'
  );

  drawLobe(
    canvasWidth / 2 + canvasHeight / 12,
    canvasHeight / 4 + canvasHeight / 12,
    Math.sqrt(2 * (canvasHeight / 12) ** 2),
    'fireBrick',
    'right'
  );

  drawLobe(
    canvasWidth / 2 - canvasHeight / 12,
    canvasHeight / 4 + canvasHeight / 12,
    Math.sqrt(2 * (canvasHeight / 12) ** 2),
    'forestGreen',
    'left'
  );

}
