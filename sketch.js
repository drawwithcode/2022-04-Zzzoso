//sketch for phone!!!



let angle = 0;
let txt;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  x = windowWidth / 2;
  y = windowHeight / 2;

  background(0, 0, 0);
  txt = createP("inclina il dispositivo per disegnare");

  let tx = width / 2 - txt.width / 2;
  let ty = 0;
}

function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}

function draw() {
  // contatore che fa cambiare contenuto al paragrafo

  angle = angle + 0.02;
  let counter = sin(angle);

  if (counter < 0) {
    txt.html("schiaccia per salvare");
  } else if (counter > 0) {
    txt.html("inclina  per disegnare");
  }

  // -------------------------------------------------

  const dx = constrain(rotationY, -1, 1);
  const dy = constrain(rotationX, -1, 1);
  x += dx;
  y += dy;

  let r = 255 * cos(angle);
  let g = 0;
  let b = 255 * sin(angle);
  let a = 200;
  let col = color(r, g, b, a);

  noStroke();
  fill(r, g, b, a);
  ellipse(x, y, 10, 10);
  border();
  txt.style("color", col);
}

function touchStarted() {
  if (touchStarted) {
    saveCanvas("capolavoro.jpg");
  }
}

function border() {
  if (x > windowWidth) {
    x = 0;
  } else {
    x = x;
  }
  if (x < 0) {
    x = windowWidth;
  } else {
    x = x;
  }
  if (y > windowHeight) {
    y = 0;
  } else {
    y = y;
  }
  if (y < 0) {
    y = windowHeight;
  } else {
    y = y;
  }
}
