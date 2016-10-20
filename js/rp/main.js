//Main js file for rp engine
var isInit = false;

var mouseX;
var mouseY;


function initCanvas() {

    if (!isInit) {
      gameCanvas = document.getElementById("gameCanvas");
      gameCanvas.width = 800; //Set canvas dimensions
      gameCanvas.height = 600;
      gameCanvas.addEventListener("keydown", checkKeypress, true); //Listen for keypresses
      gameCanvas.addEventListener("keyup", checkKeyup, true); //Listen for keyreleases
      gameCanvas.addEventListener("mousemove", checkMousePos, false); //Check mousepos
      alert("Canvas initialized!");
       //Start the main loop//
        var mainloop = function() {
            updateGame();
            updateCanvas();
        }
        gameInt = setInterval(mainloop, 1000 / 60);
      isInit = true;
    }
    
}

function createChar() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "file");
}

function drawImg() {
  
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

function checkKeypress(e) {
  
}

function checkKeyup(e) {
  
}

function updateCanvas() {
  drawImg();
}
