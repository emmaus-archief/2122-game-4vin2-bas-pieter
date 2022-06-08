/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const KEY_A = 65;
const KEY_W = 87;
const KEY_S = 83;
const KEY_D = 68;
const KEY_SPACE = 32;
const KEY_ENTER = 13;

const SPELEN1   = 11; // level 1
const SPELEN2   = 12; // level 2
const SPELEN3   = 13; // level 3
const GAMEOVER  = 2; // game over scherm
const START     = 3;    // startschem
var spelStatus = START;

// speler
var spelerX = 615; // x-positie van speler
var spelerY = 575; // y-positie van speler
var speed = 10;
var jumpspeed = 0;
var jumpstatus = false;
var botsing = false;
var SpatieKlik = false;
var SpatieKlikVorige = false;
var vallen = false;

var vijandX = 715; // x-positie van vijand
var vijandY = 575; // y-positie van vijand


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */


var beweegAlles = function () {
  // speler


if(keyIsDown(KEY_A)&& spelerX > 15){
  spelerX = spelerX - speed;
};


if(keyIsDown(KEY_D) && spelerX < 1265) {
  spelerX = spelerX + speed;
};

SpatieklikVorige = SpatieKlik;
SpatieKlik = keyIsDown(KEY_SPACE);

if( SpatieKlik === true && jumpstatus === false) {
  jumpstatus = true;
  jumpspeed = 10;
}
if(jumpstatus === true ){
  spelerY = spelerY - jumpspeed;
  jumpspeed = jumpspeed - 0.2;
}
if(jumpstatus === true && spelerY > (570)){
  jumpspeed = 0;
  jumpstatus = false;
}


if (vallen === true){
  spelerY = spelerY - 1
}

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */


/**
 * Tekent spelscherm
 */

//level 1
var tekenAlles1 = function () {
  // alle platforms
  const PlatformX = [100, 200, 300, 400]
  const PlatformY = [100, 200, 300, 400]
  
    // achtergrond
    fill("blue")
    rect(0, 0, 1280, 600)
    fill("green")
    rect(0, 600, 1280, 120)
  
    for(var i = 0; i < PlatformX.length; i++){
      fill("green")
      rect(PlatformX[i], PlatformY[i], 280, 20)
    };
  
    // vijand (later iets van spikes)
    fill("black")
    rect(vijandX - 15, vijandY - 25, 30, 50)
    fill("red")
    ellipse(vijandX, vijandY, 10, 10)
  
      // speler
    fill("red")
    rect(spelerX - 15, spelerY - 25, 30, 50)
    fill("black")
    ellipse(spelerX, spelerY, 10, 10)

    //op platform staan, moet hier door lokale variabelen PlatformX,Y
    if( jumpstatus === true && 
      spelerX - PlatformX > 50  &&  
      spelerX - PlatformX < 50 && 
      spelerY - PlatformY > 10 && 
      spelerY - PlatformY < 10){
    jumpspeed = 0;
    jumpstatus = false;
  };
};

//level 2
var tekenAlles2 = function () {
  // alle platforms
  const PlatformX = [100, 200, 300, 400]
  const PlatformY = [100, 200, 300, 400]
  
    // achtergrond
    fill("blue")
    rect(0, 0, 1280, 600)
    fill("green")
    rect(0, 600, 1280, 120)
  
    for(var i = 0; i < PlatformX.length; i++){
      fill("green")
      rect(PlatformX[i], PlatformY[i], 280, 20)
    }
  
    // vijand (later iets van spikes)
    fill("black")
    rect(vijandX - 15, vijandY - 25, 30, 50)
    fill("red")
    ellipse(vijandX, vijandY, 10, 10)
  
      // speler
    fill("red")
    rect(spelerX - 15, spelerY - 25, 30, 50)
    fill("black")
    ellipse(spelerX, spelerY, 10, 10)
 

};

//level 3
var tekenAlles3 = function () {
  // alle platforms
  const PlatformX = [100, 200, 300, 400]
  const PlatformY = [100, 200, 300, 400]
  
    // achtergrond
    fill("blue")
    rect(0, 0, 1280, 600)
    fill("green")
    rect(0, 600, 1280, 120)
  
    for(var i = 0; i < PlatformX.length; i++){
      fill("green")
      rect(PlatformX[i], PlatformY[i], 280, 20)
    }
  
    // vijand (later iets van spikes)
    fill("black")
    rect(vijandX - 15, vijandY - 25, 30, 50)
    fill("red")
    ellipse(vijandX, vijandY, 10, 10)
  
      // speler
    fill("red")
    rect(spelerX - 15, spelerY - 25, 30, 50)
    fill("black")
    ellipse(spelerX, spelerY, 10, 10)
};

//geeft true als vijand geraakt wordt
 var checkGameOver = function () {
  if(spelerX - vijandX < 35 &&
     spelerX - vijandX > -35 &&
     spelerY - vijandY < 50 &&
     spelerY - vijandY > -50) {
       console.log("botsing");
      return true;
    }
  return false;
}; 


/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  createCanvas(1280, 720)
  background('blue');
} 

//gameover scherm tekenen
 var GameoverScherm = function() {
  textSize(50);
  fill("white");
  text("je bent dood :)", 200, 200);

  if(keyIsDown(KEY_ENTER)) {
    spelStatus = START;
  };
}; 

// startscherm tekenen
var StartScherm = function() {
  fill("red");
  rect(0,0,1280,720);
  textSize(50);
  fill("white");
  text("Jump King", 500, 100 )
  fill("white");
  var x=175
  while(x<=850) {
  rect(x, 220, 210, 100);
  x+=325; }
  fill("black");
  text("level 1", 205, 285 );
  text("level 2", 530, 285 );
  text("level 3", 855, 285 );
 
  fill("white");
  rect(385,400,440,100);
};

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN1) {
    beweegAlles();
    checkGameOver();
    tekenAlles1();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === SPELEN2) {
    beweegAlles();
    tekenAlles2();
    checkGameOver();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
  }
}
  if (spelStatus === SPELEN3) {
    beweegAlles();
    tekenAlles3();
    checkGameOver();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
  }
}
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    GameoverScherm();
    

  }

  if (spelStatus === START) { 
    //tekent startscherm
    StartScherm();
    if(mouseIsPressed && mouseX < 100) {
      spelStatus = SPELEN1;
    };

  }
}

