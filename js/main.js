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
  var playerBall = new Image("img/pongimg/Ball.png");
  var bar = new Image("img/pongimg/Bar.png");
  var playButton = new Image("img/pongimg/Play.png");
  var controlsButton = new Image("img/pongimg/Controls.png");
  var mousePic = new Image("img/pongimg/Mouse.png");
  var wasd = new Image("img/pongimg/WASD.png");
  var arrowKeys = new Image("img/pongimg/ArrowKeys.png");
  var highlightBox = new Image("img/pongimg/HighlightBox.png");
  var controlsMenu = new Image("img/pongimg/ControlsMenu.png");
  var computer = new Image("img/pongimg/Computer.png");
  var barsWin = new Image("img/pongimg/BarsWin.png");
  var ballWins = new Image("img/pongimg/BallWins.png");
  
  
  
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
