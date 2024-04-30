const canvas = document.querySelector("canvas")
ctx = canvas.getContext("2d")

let isDrawing = false
let brushWidth = 5

window.addEventListener("load", () => {
  // setting canvas width & height.. offsetWidth/Height returns viewable width/height of an element
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
})

const startDrawing = () => {
  isDrawing = true
  ctx.beginPath() // being drawing from a different point
  ctx.lineWidth = brushWidth // passing brush size as line width
}

const drawing = (e) => {
  if(!isDrawing) return // if isDrawing is false return here
  ctx.lineTo(e.offsetX, e.offsetY) // creating a line according to mouse pointer
  ctx.stroke() // drawing/filling line with color
}

canvas.addEventListener("mousemove", drawing)
canvas.addEventListener("mousedown", startDrawing)
canvas.addEventListener("mouseup", () => isDrawing = false)