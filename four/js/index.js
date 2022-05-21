const wall = document.getElementById("wall")
const ctx = wall.getContext("2d")

const drawRectangle = (x, y, w, h, color, scolor, lw) => {
  ctx.fillStyle = color
  ctx.strokeStyle = scolor
  ctx.lineWidth = lw
  ctx.strokeRect(x, y, w, h)
  ctx.fillRect(x, y, w, h)
}

const drawCircle = (x, y, r, color, scolor, lw) => {
  ctx.beginPath()
  ctx.lineWidth = lw
  ctx.fillStyle = color
  ctx.strokeStyle = scolor
  ctx.arc(x, y, r, 0, Math.PI*2)
  ctx.stroke()
  ctx.fill()
}

const drawTriangle = (x, y, x1, y1, x2, y2, color, scolor, lw) => {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.closePath()

  ctx.lineWidth = lw;
  ctx.strokeStyle = scolor;
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fill();
}

drawRectangle(20, 20, 160, 160, '#ed0d0d', '#000000', 1)
drawCircle(300, 100, 80, '#f9e304', '#000000', 1)
drawTriangle(400, 180, 560, 180, 480, 20, '#0e369b', '#000000', 1)