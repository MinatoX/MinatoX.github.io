//main file for adv jam remix//

var gameCanvas;
var isInit = false;

var mouseX, mouseY;

//Game variables
var roomNum = 1;

//Image Vars to be defined in canvas initialization

//Characters
var robert = new Image();
var ryan = new Image();
var colin = new Image();
var alex = new Image();
var akira = new Image();

//Room bases
var foleyBase = new Image();

//Items
var acidSpecimen = new Image();

//HUD
var inventory = new Image();
var map = new Image();
var speech = new Image();
var speech1 = new Image();
var mapMarker = new Image();
var mapOutline = new Image();
var party = new Image();
var mouseCursor = new Image();



function initCanvas() {

  if (!isInit) {
      gameCanvas = document.getElementById("gameCanvas");
      gameCanvas.width = 800; //Set canvas dimensions
      gameCanvas.height = 600;
      //Defining images
      robert.src = "img/advjam/Robert.png";
      ryan.src = "img/advjam/Ryan.png"
      colin.src = "img/advjam/ColinRedesign.png";
      alex.src = "img/advjam/Alex.png";
      akira.src = "img/advjam/Akira.png";
      foleyBase.src = "img/advjam/Foley Main Base.png";
      inventory.src = "img/advjam/Item Inventory.png";
      map.src = "img/advjam/Map.png";
      speech.src = "img/advjam/SpeechBubble1.png";
      speech1.src = "img/advjam/SpeechBubble2.png";
      mapMarker.src = "img/advjam/mapMarker.png";
      mapOutline.src = "img/advjam/mapOutline.png";
      party.src = "img/advjam/Party.png";
      mourseCursor.src = "img/advjam/MouseCursor.png";
      
      gameCanvas.addEventListener("mousemove", checkMousePos, false); //Check mousepos
      gameCanvas.addEventListener("click", checkMouseClick, false); //Check mouse clicks
    
      alert("Canvas Initialized!");
    var mainLoop = function() {
      updateGame();
    updateCanvas();
  }
  gameInt = setInterval(mainLoop, 1000 / 60);
      isInit = true;
  }
  
  
}

function updateGame() {
  
}

function checkMousePos(e) {
  if (e.offsetX) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
 } else if (e.layerX) {
  mouseX = e.layerX;
  mouseY = e.layerY;
 }
}

function checkMouseClick(e) {
  
}

function drawImg() {
  draw = gameCanvas.getContext("2d");
  
  draw.fillStyle = "#ffffff";
  draw.fillText("X: " + mouseX, 10, 50, 200);
  draw.fillText("Y: " + mouseY, 10, 75, 200);
}

function updateCanvas() {
  gameCanvas.width = gameCanvas.width;
  drawImg();
}
