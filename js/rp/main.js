//Main js file for rp engine
var isInit = false;

var mouseX;
var mouseY;
var keycode = {};

var printText = ""


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
  draw.font = "20px Georgia";
  draw.fillStyle = "#ffffff";
  draw.fillText("Roleplay Engine test. Current version is: 0.0.1");
  draw.fillText("Press ENTER to create a new character.");
}

function updateGame() {
 
    var testFile;
if (window.XMLHttpRequest) {
    testFile = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    testFile = new ActiveXObject("Microsoft.XMLHTTP");
}

testFile.onreadystatechange = function(){alert(xhr.responseText);};
testFile.open("GET","test.txt");
testFile.send();

alert(testFile);

    
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
  e.preventDefault();
  keycode[e.keyCode] = true;
}

function checkKeyup(e) {
  keycode[e.keyCode] = false;
}

function updateCanvas() {
  drawImg();
  gameCanvas.width = gameCanvas.width;
}
