function setup() {
  createCanvas(windowWidth, windowHeight)
}

let x = 0.1
let zoom = 10
let a = -2
let b = 2

function draw() {
  translate(width / 2, height / 2)
  background(220)
  x = (mouseX / width) / 2 + 0.05
  drawFunction()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function mouseWheel(event) {
  zoom += event.delta / 50
  if (zoom <= 1) {
    zoom = 1
  }
}

function f(x) {
  return x ** 3 + 10
}

let integralValue = 0

function drawFunction() {

  integralValue = 0

  for (let i = 0; i < 5; i += x) {
    integral(i)
  }

  for (let i = 0; i > -5; i -= x) {
    integral(i)
  }

  textSize(32)
  text(`${round(integralValue, 2)}`, 10, 30)
  fill(0, 102, 153)
  text(`dx: ${round(x, 2)}`, 10, 60)
  fill(0, 102, 153, 51)
  text(`a: ${a} b: ${b}`, 10, 90)
  textSize(32)
  text(`x**3 + 10`, 10, 120)
}

function integral(i) {
  stroke(100, 143, 143)
  if (i >= a && i <= b) {
    fill(0, 255, 0)
    integralValue += x * f(i)
  }
  else {
    fill(200)
  }
  rect(i * 100, 0, x * 100, -f(i) * zoom)
}

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0)
  return Math.round(value * multiplier) / multiplier
}