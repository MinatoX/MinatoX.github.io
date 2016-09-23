//Test JS file for drawing a new canvas and adding interactivity to it

var gameCanvas;
var draw;
var isInit = false;

function initCanvas() {
  if (!isInit) {
    gameCanvas = document.getElementById("gameCanvas");
    gameCanvas.width = 600;
    gameCanvas.height = 600;
    isInit = true;
    alert("Canvas initialized!");
  } else {
    drawImg();
    checkMousePos(e);
  }
}

function drawImg() {
  var testImg = new Image();
  draw = gameCanvas.getContext("2d");
  
  testImg.src = "img/menu_back_02.png";
  draw.drawImage(testImg, 0, 0);
  
}

function checkMousePos(e) {
 var mouseX, mouseY;
 
 if (e.offsetX) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
 } else if (e.layerX) {
  mouseX = e.layerX;
  mouseY = e.layerY;
 }
 }
