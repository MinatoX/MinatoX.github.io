//Test JS file for drawing a new canvas and adding interactivity to it

//Misc
var gameCanvas;
var draw;
var isInit = false;

//Game Vars
var bar1 = {
  xPos = 0
  yPos = 225
};

var bar2 = {
  xPos = 500
  yPos = 225
};

var ball = {
  xPos = 250
  yPos = 250
};

//Game graphics
var testImg = new Image();
var playerBall = new Image();
var bar = new Image();
var playButton = new Image();
var controlsButton = new Image();
var mousePic = new Image();
var wasd = new Image();
var arrowKeys = new Image();
var highlightBox = new Image();
var controlsMenu = new Image();
var computer = new Image();
var barsWin = new Image();
var ballWins = new Image();

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
  draw = gameCanvas.getContext("2d");
  
  //testImg.src = "img/menu_back_02.png";
  playerBall.src = "img/pongimg/Ball.png";
  bar.src = "img/pongimg/Bar.png";
  playButton.src = "img/pongimg/Play.png";
  controlsButton.src = "img/pongimg/Controls.png";
  mousePic.src = "img/pongimg/Mouse.png";
  wasd.src = "img/pongimg/WASD.png";
  arrowKeys.src = "img/pongimg/ArrowKeys.png"; 
  highlightBox.src = "img/pongimg/HighlightBox.png";
  controlsMenu.src = "img/pongimg/ControlsMenu.png";
  computer.src = "img/pongimg/Computer.png";
  barsWin.src = "img/pongimg/BarsWin.png";
  ballWins.src = "img/pongimg/BallWins.png";

  draw.drawImage(bar, bar1.xPos, bar1.yPos);
  draw.drawImage(bar, bar2.xPos, bar2.yPos);
  draw.drawImage(ball, ball.xPos, ball.yPos);
  
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
