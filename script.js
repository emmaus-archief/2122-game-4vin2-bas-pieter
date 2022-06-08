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
var spelStatus = SPELEN1;

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
if(jumpstatus === true && spelerY > 375 && spelerY < 380 && spelerX > 0 && spelerX <280 ){
  jumpspeed = 0;
  jumpstatus = false;
}
if (vallen === true){
  spelerY = spelerY - 1
}



/*if(spelerX !== Platform){

   (spelerX - pltform < 10 &&
   spelerX - pltform > 10) === false


  vallen = true;
} */
  // vijand



  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */


/**
 * Tekent spelscherm
 */
var tekenAlles1 = function () {
  // achtergrond
  fill("blue")
  rect(0, 0, 1280, 600)
  fill("green")
  rect(0, 600, 1280, 120)
  
  // alle platforms
  const PlatformX = [100, 200, 300, 400]
  const PlatformY = [100, 200, 300, 400]

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

var tekenAlles2 = function () {
  // achtergrond
  fill("blue")
  rect(0, 0, 1280, 600)
  fill("green")
  rect(0, 600, 1280, 120)
  
  // alle platforms
  const PlatformX = [100, 200, 300, 400]
  const PlatformY = [100, 200, 300, 400]

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
var tekenAlles3 = function () {
  // achtergrond
  fill("blue")
  rect(0, 0, 1280, 600)
  fill("green")
  rect(0, 600, 1280, 120)
  
  // alle platforms
  const PlatformX = [100, 200, 300, 400]
  const PlatformY = [100, 200, 300, 400]

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
/**
 * return true als het gameover is
 * anders return false
 */

 var checkGameOver = function () {
  if(spelerX - vijandX < 35 &&
     spelerX - vijandX > -35 &&
     spelerY - vijandY < 50 &&
     spelerY - vijandY > -50) {
       console.log("botsing");
      return true;
    }
    
  // check of HP 0 is , of tijd op is, of ...
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
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720)

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  
} 



//gameover scherm tekenen
 var GameoverScherm = function() {
  textSize(50);
  fill("white");
  text("je bent dood :)", 200, 200)

  if(keyIsDown(KEY_ENTER)){
    spelStatus = START
  };
}; 

// startscherm tekenen
var StartScherm = function() {
  fill("white");
  rect(0, 0, 1280, 720);
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

  if (spelStatus === START) { //tekent startscherm
    
  }
}

