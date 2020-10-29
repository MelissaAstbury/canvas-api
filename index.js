// ** Animation for Cirlce ** //
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 4,
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = 'pink';
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  drawCircle();

  // Change position of the cirle
  circle.x += circle.dx;
  circle.y += circle.dy;

  // Detect side walls
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    circle.dx *= -1;
  }

  // Detect bottom and top walls
  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
    circle.dy *= -1;
  }

  requestAnimationFrame(update);
}

update();

// // *** Paths *** //
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// // Triangles
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 150);
// ctx.lineTo(50, 50);
// // Or you can use the below line to get back to the beginning
// // ctx.closePath();

// // ctx.stroke();
// ctx.fillStyle = 'green';
// ctx.fill();

// // Other Triangle
// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.stroke();

// // Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'yellow';
// ctx.fill();

// // Arc (circle) Smiley face
// ctx.beginPath();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // Draw head
// ctx.arc(centerX, centerY, 130, 0, Math.PI * 2);
// // Pinpoint where mouth should be
// ctx.moveTo(centerX + 65, centerY);
// // Draw Mouth
// ctx.arc(centerX, centerY, 65, 0, Math.PI, false);
// // Pinpoint where left eye should be
// ctx.moveTo(centerX - 30, centerY - 40);
// // Draw left eye
// ctx.arc(centerX - 50, centerY - 40, 20, 0, Math.PI * 2);
// // Pinpoint where right eye should be
// ctx.moveTo(centerX + 70, centerY - 40);
// // Draw right eye
// ctx.arc(centerX + 50, centerY - 40, 20, 0, Math.PI * 2);
// ctx.stroke();

// // Quadratic Curve
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();

// *** Basics *** //
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// // fillRect
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);

// // strokeRect
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);

// // clearRect
// ctx.clearRect(25, 25, 100, 60);

// // fillText
// ctx.font = '40px Arial';
// ctx.fillStyle = 'orange';
// ctx.fillText('Hello', 400, 50);

// // strokeText
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'purple';
// ctx.strokeText('World', 400, 150);
