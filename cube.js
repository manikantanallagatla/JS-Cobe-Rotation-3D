// Set up our canvas
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
//translate origin to the center of the screen
var transX = canvas.width * 0.5, transY = canvas.height * 0.5;
ctx.translate(transX, transY);
var color = document.querySelector('#color');
//initialise the vertices
 x1 = 150;
 y1 = + 150;
 z1 = -150;
 x2 = + 150;
 y2 = -150;
 z2 = -150;
 x3 = -150;
 y3 = -150;
 z3 = -150;
 x4 = -150;
 y4 = +150;
 z4 = -150;
 x5 = +150;
 y5 = +150;
 z5 = +150;
 x6 = +150;
 y6 = -150;
 z6 = +150;
 x7 = -150;
 y7 = -150;
 z7 = +150;
 x8 = -150;
 y8 = +150;
 z8 = +150;
 //Variables to track mouse events on the go
 mousedownx = 0;
 mousedowny = 0;
 mousePrevx = 0;
 mousePrevy = 0;
 mouseupx = 0;
 mouseupy = 0;
//how much angle should the cube move
 moveAngle = 1;
//global variable to check if mouse is clicked
 mouseClicked = false;
//global variable to check when mouse is clicked
 timeStart = 0;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Actual code handling start

//get mouse position when mouse is clicked down
function getMousePositionDown(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
  //populate global variables
  window.mousePrevx = x;
  window.mousePrevy = y;
  window.mousedownx = x;
  window.mousedowny = y;
  var d = new Date();
  window.timeStart = d.getTime();
  window.mouseClicked = true;
}

function getMousePositionMove(canvas, event) { 
  if(window.mouseClicked == true)
  {
      let rect = canvas.getBoundingClientRect(); 
      let x = event.clientX - rect.left; 
      let y = event.clientY - rect.top; 
      //check how much has mouse moved
      let deltaX = x - window.mousePrevx;
      let deltaY = y - window.mousePrevy;
      //depending on the mouse movement call the corresponsing move function
      if(deltaX > 0)
      {
        for (i = 0; i < deltaX; i++) {
              rotateYMinus(moveAngle);
            }
      }else{
          if(deltaX < 0)
          {
            for (i = 0; i < -deltaX; i++) {
              rotateY(moveAngle);
            }
          }
      }

      if(deltaY > 0)
      {
        for (i = 0; i < deltaY; i++) {
              rotateXMinus(moveAngle);
            }
      }else{
          if(deltaY < 0)
          {
            for (i = 0; i < -deltaY; i++) {
              rotateX(moveAngle);
            }
          }
      }
      //populate global variables
      window.mousePrevx = x;
      window.mousePrevy = y;
  }
}  

// function to sleep for given ms
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//get mouse position when mouse is taken up
async function getMousePositionUp(canvas, event) { 
  console.log("Mouse up");
  window.mouseClicked = false;
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
  //check how much has mouse moved
  let deltaX = x - window.mousedownx;
  let deltaY = y - window.mousedowny;
  var d = new Date();
  var n = d.getTime();
  //calaculate the speed needed along X and Y axis
  var speedX = Math.floor(Math.abs((deltaX/(n - window.timeStart))));
  var speedY = Math.floor(Math.abs((deltaY/(n - window.timeStart))));
  //Depending on speed, calculating how much time should cube rotate
  var timeStopX = n + speedX * 1000;
  var timeStopY = n + speedY * 1000;
  //variable to introduce friction - used to sleep so that friction effect is created
  var counterX = 1;
  //move cube till timeStopX or timeStopY
  while((new Date()).getTime() < timeStopX || (new Date()).getTime() < timeStopY )
  {
    //if rotation along x is needed
    if((new Date()).getTime() < timeStopX)
    {
      //rotate along x
      if(deltaX > 0)
      {
        rotateYMinus(moveAngle);
      }else{
        rotateY(moveAngle);
      }
    }else{
      //rotate along y
      if(deltaY > 0)
      {
        rotateXMinus(moveAngle);
      }else{
        rotateX(moveAngle);
      }
    }
    //sleep for friction
    await sleep(counterX);
    //increase the friction with time
    counterX+=2;
  }

} 

//add events in JS
let canvasElem = document.querySelector("canvas"); 

canvasElem.addEventListener("mousedown", function(e) 
{ 
  getMousePositionDown(canvasElem, e); 
});

canvasElem.addEventListener("mouseup", function(e) 
{ 
  getMousePositionUp(canvasElem, e); 
});

canvasElem.addEventListener("mousemove", function(e) 
{ 
  getMousePositionMove(canvasElem, e); 
});

//angle to radian
function toRadians (angle) {
  return angle * (Math.PI / 180);
}

//draw the cube
function draw()
{
  ctx.clearRect(-300, -300, canvas.width, canvas.height);
  normalise();
  //draw the 6 faces as quadrilaterals
  drawQuad(x5, y5, x6, y6, x7, y7, x8, y8, "#FFFFFF");
  drawQuad(x5, y5, x1, y1, x2, y2, x6, y6, "#FFFFFF");
  drawQuad(x5, y5, x8, y8, x4, y4, x1, y1, "#FFFFFF");
  drawQuad(x3, y3, x7, y7, x6, y6, x2, y2, "#FFFFFF");
  drawQuad(x3, y3, x4, y4, x1, y1, x2, y2, "#FFFFFF");
  drawQuad(x3, y3, x4, y4, x8, y8, x7, y7, "#FFFFFF");
}

//to display initial cube
function display() {
  draw();
}

//normalise the vertices to 150 distance from origin
function normalise()
{
  temp1 = Math.sqrt((window.x1 * window.x1) + (window.y1 * window.y1) + (window.z1 * window.z1));
  window.x1 = 150 * (window.x1/temp1);
  window.y1 = 150 * (window.y1/temp1);
  window.z1 = 150 * (window.z1/temp1);
  temp2 = Math.sqrt((window.x2 * window.x2) + (window.y2 * window.y2) + (window.z2 * window.z2));
  window.x2 = 150 * (window.x2/temp2);
  window.y2 = 150 * (window.y2/temp2);
  window.z2 = 150 * (window.z2/temp2);
  temp3 = Math.sqrt((window.x3 * window.x3) + (window.y3 * window.y3) + (window.z3 * window.z3));
  window.x3 = 150 * (window.x3/temp3);
  window.y3 = 150 * (window.y3/temp3);
  window.z3 = 150 * (window.z3/temp3);
  temp4 = Math.sqrt((window.x4 * window.x4) + (window.y4 * window.y4) + (window.z4 * window.z4));
  window.x4 = 150 * (window.x4/temp4);
  window.y4 = 150 * (window.y4/temp4);
  window.z4 = 150 * (window.z4/temp4);
  temp5 = Math.sqrt((window.x5 * window.x5) + (window.y5 * window.y5) + (window.z5 * window.z5));
  window.x5 = 150 * (window.x5/temp5);
  window.y5 = 150 * (window.y5/temp5);
  window.z5 = 150 * (window.z5/temp5);
  temp6 = Math.sqrt((window.x6 * window.x6) + (window.y6 * window.y6) + (window.z6 * window.z6));
  window.x6 = 150 * (window.x6/temp6);
  window.y6 = 150 * (window.y6/temp6);
  window.z6 = 150 * (window.z6/temp6);
  temp7 = Math.sqrt((window.x7 * window.x7) + (window.y7 * window.y7) + (window.z7 * window.z7));
  window.x7 = 150 * (window.x7/temp7);
  window.y7 = 150 * (window.y7/temp7);
  window.z7 = 150 * (window.z7/temp7);
  temp8 = Math.sqrt((window.x8 * window.x8) + (window.y8 * window.y8) + (window.z8 * window.z8));
  window.x8 = 150 * (window.x8/temp8);
  window.y8 = 150 * (window.y8/temp8);
  window.z8 = 150 * (window.z8/temp8);
}

//rotate along y with +5 degress
function rotateY(angle) {
  window.x6 = window.x6*Math.cos(toRadians(angle)) - window.z6*Math.sin(toRadians(angle));
  window.z6 = window.x6*Math.sin(toRadians(angle)) + window.z6*Math.cos(toRadians(angle));
  window.x1 = window.x1*Math.cos(toRadians(angle)) - window.z1*Math.sin(toRadians(angle));
  window.z1 = window.x1*Math.sin(toRadians(angle)) + window.z1*Math.cos(toRadians(angle));
  window.x2 = window.x2*Math.cos(toRadians(angle)) - window.z2*Math.sin(toRadians(angle));
  window.z2 = window.x2*Math.sin(toRadians(angle)) + window.z2*Math.cos(toRadians(angle));
  window.x3 = window.x3*Math.cos(toRadians(angle)) - window.z3*Math.sin(toRadians(angle));
  window.z3 = window.x3*Math.sin(toRadians(angle)) + window.z3*Math.cos(toRadians(angle));
  window.x4 = window.x4*Math.cos(toRadians(angle)) - window.z4*Math.sin(toRadians(angle));
  window.z4 = window.x4*Math.sin(toRadians(angle)) + window.z4*Math.cos(toRadians(angle));
  window.x5 = window.x5*Math.cos(toRadians(angle)) - window.z5*Math.sin(toRadians(angle));
  window.z5 = window.x5*Math.sin(toRadians(angle)) + window.z5*Math.cos(toRadians(angle));
  window.x7 = window.x7*Math.cos(toRadians(angle)) - window.z7*Math.sin(toRadians(angle));
  window.z7 = window.x7*Math.sin(toRadians(angle)) + window.z7*Math.cos(toRadians(angle));
  window.x8 = window.x8*Math.cos(toRadians(angle)) - window.z8*Math.sin(toRadians(angle));
  window.z8 = window.x8*Math.sin(toRadians(angle)) + window.z8*Math.cos(toRadians(angle));
  draw();
}

//rotate along x with +5 degress
function rotateX(angle) {
  window.y6 = window.y6*Math.cos(toRadians(angle)) - window.z6*Math.sin(toRadians(angle));
  window.z6 = window.y6*Math.sin(toRadians(angle)) + window.z6*Math.cos(toRadians(angle));
  window.y1 = window.y1*Math.cos(toRadians(angle)) - window.z1*Math.sin(toRadians(angle));
  window.z1 = window.y1*Math.sin(toRadians(angle)) + window.z1*Math.cos(toRadians(angle));
  window.y2 = window.y2*Math.cos(toRadians(angle)) - window.z2*Math.sin(toRadians(angle));
  window.z2 = window.y2*Math.sin(toRadians(angle)) + window.z2*Math.cos(toRadians(angle));
  window.y3 = window.y3*Math.cos(toRadians(angle)) - window.z3*Math.sin(toRadians(angle));
  window.z3 = window.y3*Math.sin(toRadians(angle)) + window.z3*Math.cos(toRadians(angle));
  window.y4 = window.y4*Math.cos(toRadians(angle)) - window.z4*Math.sin(toRadians(angle));
  window.z4 = window.y4*Math.sin(toRadians(angle)) + window.z4*Math.cos(toRadians(angle));
  window.y5 = window.y5*Math.cos(toRadians(angle)) - window.z5*Math.sin(toRadians(angle));
  window.z5 = window.y5*Math.sin(toRadians(angle)) + window.z5*Math.cos(toRadians(angle));
  window.y7 = window.y7*Math.cos(toRadians(angle)) - window.z7*Math.sin(toRadians(angle));
  window.z7 = window.y7*Math.sin(toRadians(angle)) + window.z7*Math.cos(toRadians(angle));
  window.y8 = window.y8*Math.cos(toRadians(angle)) - window.z8*Math.sin(toRadians(angle));
  window.z8 = window.y8*Math.sin(toRadians(angle)) + window.z8*Math.cos(toRadians(angle));
  draw();
}

//rotate along y with -5 degress
function rotateYMinus(angle) {
rotateY(-angle);
}

//rotate along x with -5 degress
function rotateXMinus(angle) {
 rotateX(-angle);
}


//draw a quadrilateral
function drawQuad(x5, y5, x6, y6, x7, y7, x8, y8, color) {
    ctx.beginPath();
    ctx.moveTo(x5, y5);
    ctx.lineTo(x6, y6);
    ctx.lineTo(x7, y7);
    ctx.lineTo(x8, y8);
    ctx.closePath();
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    // ctx.fill();
  }