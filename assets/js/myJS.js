const myCanvas = document.getElementById("myCanvas");
const painter = myCanvas.getContext("2d");

function drawCircle() {
    painter.beginPath();
    painter.strokeStyle = getRandRGB();
    painter.lineWidth = getRandomInteger(10); 
    painter.arc(getRandomInteger(640), getRandomInteger(480), getRandomInteger(240), 0, 2 * Math.PI); // x , y, radius, start angle, end angle
    painter.stroke();
}

function drawRectangle() {
    painter.beginPath();
    painter.strokeStyle = getRandRGB();
    painter.lineWidth = getRandomInteger(10); 
    painter.strokeRect(getRandomInteger(640), getRandomInteger(480), getRandomInteger(640), getRandomInteger(480)); // x, y, width, height
}

function draw100() {
    for (var i = 0; i < 100; i++) {
        drawCircle()
    }
    for (var i = 0; i < 100; i++) {
        drawRectangle()
    }
}

function getRandomInteger(x) { 
    return Math.floor(Math.random() * ( x + 1)); 
} 

function getRandRGB() { 
    let randRed = getRandomInteger(255); 
    let randGreen = getRandomInteger(255); 
    let randBlue = getRandomInteger(255); 
    return 'rgb(' + randRed + ', ' + randGreen + ', ' + randBlue + ')'; 
} 


  
  