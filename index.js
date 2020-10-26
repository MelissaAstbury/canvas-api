const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// fillRect
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(200, 20, 150, 100);

// strokeRect
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.strokeRect(100, 200, 150, 100);

// clearRect
ctx.clearRect(25, 25, 100, 60);

// fillText
ctx.font = '40px Arial';
ctx.fillStyle = 'orange';
ctx.fillText('Hello', 400, 50);

// strokeText
ctx.lineWidth = 1;
ctx.strokeStyle = 'purple';
ctx.strokeText('World', 400, 150);
