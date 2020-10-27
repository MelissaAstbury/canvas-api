// *** Paths *** //
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Triangles
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 150);
ctx.lineTo(50, 50);
// Or you can use the below line to get back to the beginning
// ctx.closePath();

// ctx.stroke();
ctx.fillStyle = 'green';
ctx.fill();

// Other Triangle
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 150);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.stroke();

// Rectangle
ctx.beginPath();
ctx.rect(300, 50, 150, 100);
ctx.fillStyle = 'yellow';
ctx.fill();

// Arc (circle) Smiley face
ctx.beginPath();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Draw head
ctx.arc(centerX, centerY, 130, 0, Math.PI * 2);
// Pinpoint where mouth should be
ctx.moveTo(centerX + 65, centerY);
// Draw Mouth
ctx.arc(centerX, centerY, 65, 0, Math.PI, false);
// Pinpoint where left eye should be
ctx.moveTo(centerX - 30, centerY - 40);
// Draw left eye
ctx.arc(centerX - 50, centerY - 40, 20, 0, Math.PI * 2);
// Pinpoint where right eye should be
ctx.moveTo(centerX + 70, centerY - 40);
// Draw right eye
ctx.arc(centerX + 50, centerY - 40, 20, 0, Math.PI * 2);
ctx.stroke();

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
