//Test JS file for drawing a new canvas and adding interactivity to it

//Misc
var gameCanvas;
var draw;
var isInit = false;
var gameInt;
var keycode = {};//e.keyCode;
var falseKeycode = {};

//Game Vars
var bar1X = 0;
var bar1Y = 225;

var bar2X = 750;
var bar2Y = 225;

var ballX = 375;
var ballY = 250;

var mouseX, mouseY;

var barUp;
var barDown;
var ballUp;
var ballDown;
var barDir = false;


//Game graphics
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
      gameCanvas.width = 800; //Set canvas dimensions
      gameCanvas.height = 600;
      playerBall.src = "img/pongimg/Ball.png"; //LOAD IMAGES
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
      gameCanvas.addEventListener("keydown", checkKeypress, true); //Listen for keypresses
      gameCanvas.addEventListener("keyup", checkKeyup, true); //Listen for keyreleases
      gameCanvas.addEventListener("mousemove", checkMousePos, false); //Check mousepos
      alert("Canvas initialized!");
      isInit = true;
    }
      //Start the main loop//
        var mainloop = function() {
            updateGame();
            updateCanvas();
        }
        gameInt = setInterval(mainloop, 1000 / 60);
    
}

function drawImg() { //Draw images onto the screen
  draw = gameCanvas.getContext("2d");
  
  //testImg.src = "img/menu_back_02.png";
  draw.drawImage(bar, bar1X, bar1Y);
  draw.drawImage(bar, bar2X, bar2Y);
  draw.drawImage(playerBall, ballX, ballY);
  
}

function updateGame() {
    //Movement////////////////////
    if (barUp) {
        bar1Y = bar1Y - 7;
        bar2Y = bar2Y - 7;
    } 
    if (barDown) {
        bar1Y = bar1Y + 7;
        bar2Y = bar2Y + 7;
    }
    
    if (ballUp) {
        ballY = ballY - 7;   
    } 
    if (ballDown) {
        ballY = ballY + 7;   
    }
    
    if (barDir) {
     ballX = ballX - 7;   
    } else {
     ballX = ballX + 7;
    }
    
    /////////////////////////
    
    //Border Creation///////
    if (bar1Y > 375) {
        bar1Y = 375;
        bar2Y = 375;
    } else if (bar1Y < 0) {
        bar1Y = 0;
        bar2Y = 0;
    }
    if (ballY > 475) {
        ballY = 475;   
    } else if (ballY < 25) {
        ballY = 25;   
    }
    
    ////////////////////////
    
    //Change Ball Direction/
    
    if (barDir && ballX > bar1X + 50 && ballY >= bar1Y && ballY <= bar1Y + 75) {
        barDir = false;
        //Increment bar point by .5
    } else if (!barDir && ballX < bar2X && ballY >= bar1Y && ballY <= bar2Y + 75) {
        barDir = true;
        //Increment bar point by .5
    }
    
    if (ballX >= 900 || ballX <= -100) {
        ballX = 400;
    }
    
    ////////////////////////
    
}

function checkMousePos(e) {
 
 if (e.offsetX) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
 } else if (e.layerX) {
  mouseX = e.layerX;
  mouseY = e.layerY;
 }
  //alert("Mouse is positioned at X=" + mouseX + " and Y=" + mouseY);
  
 }

function checkKeypress(e) { //Check keypresses
    
    keycode[e.keyCode] = true;
    
    
    if (keycode[87]) {
        barUp = true;
        falseKeycode[87] = false;
        //barDown = false;
    } 
    if (keycode[83]) {
        //barUp = false;
        barDown = true;
        falseKeycode[83] = false;
    } 
   /* if (!keycode[87] && !keycode[83])  {
         barUp = false;
         barDown = false;
    } */
    
    if (keycode[38]) {
        ballUp = true;
        falseKeycode[38] = false;
        //ballDown = false;
    } 
    if (keycode[40]) {
       // ballUp = false;
        falseKeycode[40] = false;
        ballDown = true;
    } 
    
    if (!keycode[87] && !keycode[83] && !keycode[38] && !keycode[40]) {
        barUp = false;
        barDown = false;
        ballUp = false;
        ballDown = false;
    }
    
   /* if (!keycode[38] && !keycode[40]){
        ballUp = false;
        ballDown = false;
    } */
  
  //alert(keycode);  
}

function checkKeyup(e) { //Check key releases
    falseKeycode[e.keyCode] = true;
    //keycode[e.keyCode] = false;
    
    if (falseKeycode[87]) {
        barUp = false;
        keycode[87] = false;
    }
    if (falseKeycode[83]) {
        barDown = false; 
        keycode[83] = false;
    }
    
    if (falseKeycode[38]) {
        ballUp = false;
        keycode[38] = false;
    }
    
    if (falseKeycode[40]) {
        ballDown = false;
        keycode[40] = false;
    }
   
    /*if (falseKeycode[87]) {
     barUp = false;
     keycode[87] = false;
    }
    if (falseKeycode[83]) {
     barDown = false;
     keycode[83] = false;
    }
    
    if (falseKeycode[38]) {
      ballUp = false;
      keycode[38] = false;
    }
    if (falseKeycode[40]) {
        ballDown = false;
        keycode[40] = false;
    } */
    
}

function updateCanvas() {
    gameCanvas.width = gameCanvas.width;
    drawImg();
}
