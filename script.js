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

const SPELEN1 = 11;
const SPELEN2 = 12;
const SPELEN3 = 13;
const GAMEOVER = 2;
const START = 3;
var spelStatus = SPELEN1;

var spelerX = 615; // x-positie van speler
var spelerY = 575; // y-positie van speler
var speed = 10;
var jumpspeed = 0;
var jumpstatus = false;
var botsing = false;
var SpatieKlik = false;
var SpatieKlikVorige = false;
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

if(SpatieKlikVorige === false && SpatieKlik === true) {
  jumpstatus = true;
  jumpspeed = 5;
}
if(jumpstatus === true ){
  spelerY = spelerY - jumpspeed;
  jumpspeed = jumpspeed - 0.2;
}
if(spelerY > 570){
  jumpspeed = 0;
}
if(botsing === true){
  jumpspeed = 0
}
  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("blue")
  rect(0, 0, 1280, 600)
  fill("green")
  rect(0, 600, 1280, 120)
  // vijand

  // kogel

  // speler
  fill("red")
  rect(spelerX - 15, spelerY - 25, 30, 50)
  fill("black")
  ellipse(spelerX, spelerY, 10, 10)

  /*  fill("white");
  ellipse(spelerX, spelerY, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);
  
  rect(spelerX + 24, spelerY - 5, 10, 10);
  rect(spelerX - 34, spelerY - 5, 10, 10);
  rect(spelerX - 5, spelerY + 24, 10, 10);
  rect(spelerX - 5, spelerY - 34, 10, 10); */
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
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

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN1) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === SPELEN2) {

  }
  if (spelStatus === SPELEN3) {
    
  }
  
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
  if (spelStatus === START) { //tekent startscherm
    
  }
}

