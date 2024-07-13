//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// Variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Makes sure that the stars are the same size
const starSize = 5;

// Draws the sun
function sun() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(35, 35, 25, 0, 2 * Math.PI);
    ctx.fill();
}

// Function to draw the blue rectangle at the bottom
function sea() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, canvas.height - canvas.height * 0.2, canvas.width, canvas.height * 0.2);
}

//draws random circles. uses the math.random function to do this
function drawStars(color, frequency) {
    for (let i = 0; i < frequency; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        drawShape(x, y, starSize, color);
    }
}

//Actually draws the canvas, clears it before so that shapes can generate
function draw(color, frequency) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars(color, frequency);
    sun();
    sea();
}

//draws the circle
function drawShape(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
}

//Updates canvas by grabbing user color and frequency from html
function updateCanvas() {
    const colorInput = document.getElementById('color');
    const frequencyInput = document.getElementById('frequency');
    const color = colorInput.value;
    const frequency = frequencyInput.value;
    // Calls draw function
    draw(color, frequency);
}

//using event listeners to update the canvas when user clicks the submit button in html doc
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', updateCanvas);
draw('red', 5);