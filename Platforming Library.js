
//Game Variables; You CAN'T change these
var gameCanvas;
var gameInt;
var isInit = false;
var draw;
var keycode = {};
var falseKeycode = {};
var moveLeft = false;
var moveRight = false;
var jumpForce = 0;
var maxY = 0;
var falling = false;
var mouseX, mouseY;
var clicks = 0;
var currentLevel = 0;
var spawnX;
var spawnY;
var thePlayer;
var walls = [];
var flag;
var playerPosDisplay = false;
////////////////////////////////////////

//Game Physics Variables; You can change these
var gravity = -3;
var speed = 5;
var maxJump = 200; //How high the player can jump
var jumpSpeed = 10; //How fast the player can jump
var padding = 10; //Padding on border; 10 recommended as minimum; any lower can break collision detection
////////////////////////////////////////

function object(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function finishFlag(x, y) {
    this.x = x;
    this.y = y;
}

function wall(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function levelData() {
    currentLevel = prompt('Put in a level number [MAX 1]');
//Level 1 Data////////////////////////////////////////////////////////////////////////////////////////
    if (currentLevel == 1) {
        thePlayer = new object(120, 130, 50, 50); //x, y, width, height; Change as needed for the player
        walls = [new wall(100, 200, 100, 50), new wall(500, window.innerHeight - 50, 50, 50), new wall(300, window.innerHeight - 50, 100, 50), new wall(700, 100, 100, 50), new wall(450, 300, 50, 50), new wall(625, 200, 50, 50), new wall(700, 300, 50, 50)]; 
        flag = new finishFlag(900, 900);
        //new wall(x, y, width, height) ; each wall should be separated by a comma (,)
    } else {
        alert('Input a valid level number!');
    }
    spawnX = thePlayer.x;
    spawnY = thePlayer.y;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//NOTHING BELOW HERE SHOULD BE MODIFIED EDIT AT YOUR OWN RISK
//////////////////////////////////////////////////////////////////////////////////////////////////////

function initCanvas() {
    if (!isInit) {
        gameCanvas = document.getElementById('gameCanvas');
        draw = gameCanvas.getContext('2d');
        gameCanvas.width = window.innerWidth;
        gameCanvas.height = window.innerHeight;
        gameCanvas.addEventListener("keydown", checkKeypress, false);
        gameCanvas.addEventListener("keyup", checkKeyup, false);
    
        var mainLoop = function() {
            updateGame();
             updateCanvas(); 
        }
        gameInt = setInterval(mainLoop, 1000/60);
        isInit = true;
    }
}

function physics() {
    //Apply gravity w/ jump
    thePlayer.y -= gravity;
    thePlayer.y -= jumpForce;
    
    if (!falling) { 
        maxY = thePlayer.y - maxJump;
    }
    
    if (keycode[32] && !falling && thePlayer.y > maxY) {
        jumpForce = jumpSpeed;
        falling = true;
    } else if (!keycode[32] && falling || thePlayer.y < maxY) {
        jumpForce = 0;
    }
    
    falling = true;
}

function checkCol(objectColl) {
    if (objectColl.y >= gameCanvas.height - objectColl.height) { //Bottom border
        //objectColl.y = gameCanvas.height - objectColl.height; //UNCOMMENT TO REMOVE DEATH PANE
        falling = false;
        thePlayer.x = spawnX;
        thePlayer.y = spawnY;
    }
    
    for (var i=0; i < walls.length; i++) {
        if (objectColl.x + objectColl.width >= walls[i].x - padding && objectColl.y + objectColl.height >= walls[i].y - padding && objectColl.y <= walls[i].y + walls[i].height + padding && objectColl.x <= walls[i].x + walls[i].width + padding) {
            
            if (objectColl.y < walls[i].y - walls[i].height - jumpForce + 1) { //Object is above
                objectColl.y += gravity;
                falling = false;
            } else if (objectColl.y > walls[i].y + walls[i].height) { //Object is below
                objectColl.y -= gravity - jumpForce;
                jumpForce = 0;
                falling = true;
            }
            
            else if (objectColl.x < walls[i].x) { //Object is to the left
               objectColl.x -= speed;
               falling = true;
            } else if (objectColl.x > walls[i].x + walls[i].width) { //Object is to the right
                objectColl.x += speed;
                falling = true;
            }
        }
    }
}

function checkKeypress(e) {
    keycode[e.keyCode] = true;
    e.preventDefault();
    
    if (keycode[37]) {
        //moveInput = -1;
        moveLeft = true;
        falseKeycode[37] = false;
    } 
    if (keycode[39]) {
        //moveInput = 1;
        moveRight = true;
        falseKeycode[39] = false;
    }
    /*if (keycode[32]) {
        if (jumpForce >= maxJump) {
            keycode[32] = false;
        }
    }*/
    
    if (!keycode[37] && !keycode[39]) {
        moveLeft = false;
        moveRight = false;
    }
}

function checkKeyup(e) {
    falseKeycode[e.keyCode] = true;
    if (falseKeycode[37]) {
        keycode[37] = false;
        moveLeft = false;
        //moveInput = 0;
    } 
    if (falseKeycode[39]) {
        keycode[39] = false;
        moveRight = false;
        //moveInput = 0;
    }
    if (falseKeycode[32]) {
        keycode[32] = false;
        falling = true;
        if (jumpForce > 0) {
            //jumpForce -= 1;
        } else {
            falseKeycode[32] = false;
            jumpForce = 0;
        }
    }
}

//OPTIONS FUNCTIONS//////////////////////////////////////////////////////
function newWidth() {
    var canWidth = prompt("Insert the new canvas width");
    if (canWidth > 0) {
        gameCanvas.width = canWidth;
    } else {
        alert('Please input a valid width.'); 
    }
}

function newHeight() {
    var canHeight = prompt("Insert the new canvas height");
    if (canHeight > 0) {
        gameCanvas.height = canHeight;
    } else {
        alert('Please input a valid height.');
    }
}

function display() {
    if (!playerPosDisplay) {
        playerPosDisplay = true;
    } else {
        playerPosDisplay = false;
    }
}
///////////////////////////////////////////////////////////////////////////

function updateCanvas() {
    
    gameCanvas.width = gameCanvas.width;
    drawImg();
}