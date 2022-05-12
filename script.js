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

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 550; // y-positie van speler

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */

var speed = 3;
var beweegAlles = function () {
  // speler


if(keyIsDown(KEY_A)&& spelerX >0){
  spelerX = spelerX - speed;
};


if(keyIsDown(KEY_D) && spelerX <1250 ) {
  spelerX = spelerX + speed;
};

if(keyIsDown(KEY_W) && spelerY >3) {
  spelerY = spelerY - speed;
};

if(keyIsDown(KEY_S) && spelerY <550) {
  spelerY = spelerY + speed;
}; 
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
  rect(spelerX, spelerY, 30, 50)
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
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}

