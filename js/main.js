//Test JS file for drawing a new canvas and adding interactivity to it

var gameCanvas;
var isInit = false;

function initCanvas() {
  if (!isInit) {
    gameCanvas = document.getElementById("gameCanvas");
    gameCanvas.width = 600;
    gameCanvas.height = 800;
    isInit = true;
    alert("Canvas initialized!");
  }
}
