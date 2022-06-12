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
const GAMEOVER  = 2;  // game over scherm
const START     = 3;  // startschem
const HULP      = 4;  // hulpmenu
const FINISH    = 5;  // finish
var spelStatus = START;

// speler
var spelerX = 615; // x-positie van speler
var spelerY = 575; // y-positie van speler

//finishblok

var finishX = 1000
var finishY = -3100
//alle andere dingen
var speed = 10;
var jumpspeed = 0;
var jumpstatus = false;
var botsing = false;
var SpatieKlik = false;
var SpatieKlikVorige = false;
var vallen = false;
var staan = true;
var valSnelheid = false;
var PlatformHoogte = 20;
var PlatformBreedte = 280;
var gameover = false;
var finish = false;


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

if( SpatieKlik === true && jumpstatus === false && staan === true) {
  jumpstatus = true;
  jumpspeed = 10;
  staan = false;
}
if(jumpstatus === true && jumpspeed > 0){
  spelerY = spelerY - jumpspeed;
  jumpspeed = jumpspeed - 0.2;
}

if((jumpstatus === true || vallen === true) && spelerY > (570)){
  jumpspeed = 0;
  jumpstatus = false;
  vallen = false;
  valSnelheid = 0;
  staan = true;
}
//stop met springen als die boven is
if(jumpspeed < 0 ){
  jumpstatus = false;
  vallen = true;
}

//zwaartekracht
if(vallen === true){
  spelerY = spelerY - valSnelheid;
  valSnelheid = valSnelheid - 0.2;
}


};

//level 1
var tekenAlles1 = function () {
  // achtergrond
  fill("blue")
  rect(0, -10*720, 1280, 600+10*720)
  fill("green")
  rect(0, 600, 1280, 220)

  // alle platforms
const PlatformX = [100, 650, 300, 600, 420, 610, 12, 900, 570, 340, 890, 120, 345, 733, 845, 123, 254, 901]
const PlatformY = [400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1600, -1800, -2000, -2200, -2400, -2600, -2800, -3000]

for(var i = 0; i < PlatformX.length; i++){
    fill("green")
    rect(PlatformX[i], PlatformY[i], PlatformBreedte, PlatformHoogte)
    
    // zorgt voor het staan op de platforms, 
    // moet hier door array en lokale variabelen
    if(spelerX - PlatformX[i] < PlatformBreedte + 15  &&  
       spelerX - PlatformX[i] > -15 && 
       spelerY - PlatformY[i] < -23 && 
       spelerY - PlatformY[i] > -30){
    jumpspeed = 0;
    jumpstatus = false;
    staan = true;
    vallen = false;
    valSnelheid = 0;
    }
  }
// alle dodelijke platforms/spikes
 const spikeX = [250, 700, 400, 600, 500, 670, 100, 933, 623, 551, 910, 300]
const spikeY = [400 - 10, 200- 10, 0- 10, -200- 10, -400- 10, -600- 10, -800- 10, -1000- 10, -1200- 10, -1400- 10, -1600- 10, -1800- 10, -2000- 10, -2200- 10, -2400- 10, -2600- 10, -2800- 10, -3000- 10]

for(var i = 0; i < spikeX.length; i++){
  fill("red")
  rect(spikeX[i], spikeY[i], 80, 10)
  
  // zorgt voor doodgaan
  if(spelerX - spikeX[i] < 85 &&
    spelerX - spikeX[i] > -10 &&
    spelerY - spikeY[i] < 25 &&
    spelerY - spikeY[i] > -25){
  gameover = true;
  } 
} 
   

if(spelerX - finishX < 100 &&
  spelerX - finishX > -100  &&
  spelerY - finishY < 100  &&
  spelerY - finishY > -100 ) {
    finish = true;

  }


     fill("white")
     rect(finishX, finishY, 100, 100)

       // speler
     fill("red")
     rect(spelerX - 15, spelerY - 25, 30, 50)
     fill("black")
     ellipse(spelerX, spelerY, 10, 10)

 
     
}


//level 2
var tekenAlles2 = function () {
  // achtergrond
  fill("blue")
  rect(0, -10*720, 1280, 600+10*720)
  fill("green")
  rect(0, 600, 1280, 220)

  // alle platforms
const PlatformX = [100, 350, 700, 100, 400, 600, 100, 200, 570, 340, 890, 120, 345, 733, 845, 123, 254, 901]
const PlatformY = [400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1600, -1800, -2000, -2200, -2400, -2600, -2800, -3000]

for(var i = 0; i < PlatformX.length; i++){
    fill("green")
    rect(PlatformX[i], PlatformY[i], PlatformBreedte, PlatformHoogte)
    
    // zorgt voor het staan op de platforms, 
    // moet hier door array en lokale variabelen
    if(spelerX - PlatformX[i] < PlatformBreedte + 15  &&  
       spelerX - PlatformX[i] > -15 && 
       spelerY - PlatformY[i] < -23 && 
       spelerY - PlatformY[i] > -30){
    jumpspeed = 0;
    jumpstatus = false;
    staan = true;
    vallen = false;
    valSnelheid = 0;
    }
  }
// alle dodelijke platforms/spikes
 const spikeX = [360, 700, 430, 670, 200, 567, 355, 735]
const spikeY = [200 - 10, 0- 10, -400- 10, -600- 10, -1000- 10, -1200- 10, -2000- 10, -2200- 10, ]

for(var i = 0; i < spikeX.length; i++){
  fill("red")
  rect(spikeX[i], spikeY[i], 80, 10)
  
  // zorgt voor doodgaan
  if(spelerX - spikeX[i] < 85 &&
    spelerX - spikeX[i] > -10 &&
    spelerY - spikeY[i] < 25 &&
    spelerY - spikeY[i] > -25){
  gameover = true;
  } 
} 
   

if(spelerX - finishX < 100 &&
  spelerX - finishX > -100  &&
  spelerY - finishY < 100  &&
  spelerY - finishY > -100 ) {
    finish = true;

  }


     fill("white")
     rect(finishX, finishY, 100, 100)

       // speler
     fill("red")
     rect(spelerX - 15, spelerY - 25, 30, 50)
     fill("black")
     ellipse(spelerX, spelerY, 10, 10)

 
     
}

//level 3
var tekenAlles3 = function () {
  // achtergrond
  fill("blue")
  rect(0, -10*720, 1280, 600+10*720)
  fill("green")
  rect(0, 600, 1280, 220)

  // alle platforms
const PlatformX = [100, 850, 20, 400, 900, 300, 100, 900, 570, 40, 890, 120, 905, 3, 845, 123, 4, 901]
const PlatformY = [400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1600, -1800, -2000, -2200, -2400, -2600, -2800, -3000]

for(var i = 0; i < PlatformX.length; i++){
    fill("green")
    rect(PlatformX[i], PlatformY[i], PlatformBreedte, PlatformHoogte)
    
    // zorgt voor het staan op de platforms, 
    // moet hier door array en lokale variabelen
    if(spelerX - PlatformX[i] < PlatformBreedte + 15  &&  
       spelerX - PlatformX[i] > -15 && 
       spelerY - PlatformY[i] < -23 && 
       spelerY - PlatformY[i] > -30){
    jumpspeed = 0;
    jumpstatus = false;
    staan = true;
    vallen = false;
    valSnelheid = 0;
    }
  }
// alle dodelijke platforms/spikes
 const spikeX = [300, 850, 220, 400, 930, 450, 300, 920, 570, 340, 890, 120, 905, 3, 845, 123, 4, 901]
const spikeY = [400 - 10, 200- 10, 0- 10, -200- 10, -400- 10, -600- 10, -800- 10, -1000- 10, -1200- 10, -1400- 10, -1600- 10, -1800- 10, -2000- 10, -2200- 10, -2400- 10, -2600- 10, -2800- 10, -3000- 10]

for(var i = 0; i < spikeX.length; i++){
  fill("red")
  rect(spikeX[i], spikeY[i], 80, 10)
  
  // zorgt voor doodgaan
  if(spelerX - spikeX[i] < 85 &&
    spelerX - spikeX[i] > -10 &&
    spelerY - spikeY[i] < 25 &&
    spelerY - spikeY[i] > -25){
  gameover = true;
  } 
} 
   

if(spelerX - finishX < 100 &&
  spelerX - finishX > -100  &&
  spelerY - finishY < 100  &&
  spelerY - finishY > -100 ) {
    finish = true;

  }


     fill("white")
     rect(finishX, finishY, 100, 100)

       // speler
     fill("red")
     rect(spelerX - 15, spelerY - 25, 30, 50)
     fill("black")
     ellipse(spelerX, spelerY, 10, 10)

 
     
}

//geeft true als vijand geraakt wordt
 var checkGameOver = function () {
  if(gameover === true) {
      return true;
    }
  return false;
}; 

 var CheckFinish = function(){
if(finish === true) {

  return true;
}
return false;
 }

function moveLevel(){ 
  if (spelerY > 360); 
  translate( 0, 500 - spelerY);
 }

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
  fill("red");
  rect(0,0,1280,720);
  textSize(50);
  fill("white");
  text("Je zuigt", 500, 100 )

  fill("white");
  var y=345
  while (y<=550) {
  rect(375, y, 450, 100);
  y+=125; }
  fill("black");
  text("naar hoofdmenu", 418, 405 );
  text("naar hulpmenu", 430, 535 );

   // opnieuw proberen



  //naar startmenu gaan

  if(mouseIsPressed && 
    mouseX < 825 &&
    mouseX > 375 &&
    mouseY < 445 &&
    mouseY > 345 ) {
    spelStatus = START;
  };

  //naar hulpmenu gaan
  if(mouseIsPressed && 
    mouseX < 825 &&
    mouseX > 325 &&
    mouseY < 570 &&
    mouseY > 470 ) {
    spelStatus = HULP;
  };

}; 

// hulpscherm tekenen

var HulpScherm = function() {

  // achtergrond
  fill("red");
  rect(0,0,1280,720);

  // titel hulp
  textSize(50);
  fill("white");
  text("hulpmenu", 490, 100 )

  // informatie
  fill("white");
  var y=220
  while (y<=550) {
  rect(75, y, 450, 100);
  y+=125; }
  fill("black");
  text("A is naar links", 100, 285 );
  text("D is naar rechts", 100, 405 );
  text("Spatie is springen", 100, 535 );

  fill('white');
  rect(600, 345, 450, 100);
  fill('black');
  text("naar hoodmenu", 610, 410)

  if(mouseIsPressed && 
    mouseX < 1050 &&
    mouseX > 600 &&
    mouseY < 450 &&
    mouseY > 345 ) {
    spelStatus = START;
  };
}

// finish scherm tekenen
var finishScherm = function() {

  // achtergrond
  fill("yellow");
  rect(0,0,1280,720);

  // titel spel
  textSize(50);
  fill("black");
  text("Level Gehaald", 490, 100 )

  fill('white');
  rect(400, 345, 450, 100);
  fill('black');
  text("naar hoodmenu", 410, 410)

  if(mouseIsPressed && 
    mouseX < 1150 &&
    mouseX > 400 &&
    mouseY < 450 &&
    mouseY > 345 ) {
    spelStatus = START;
  };
}


// startscherm tekenen
var StartScherm = function() {

  // achtergrond
  fill("red");
  rect(0,0,1280,720);

  // titel spel
  textSize(50);
  fill("white");
  text("Jump King", 490, 100 )

  // de levels
  fill("white");
  var x=175
  while (x<=850) {
  rect(x, 220, 210, 100);
  x+=325; }
  fill("black");
  text("level 1", 205, 285 );
  text("level 2", 530, 285 );
  text("level 3", 855, 285 );
 
  // de hulpknop
  fill("white");
  rect(385,500,440,100);
  fill('black');
  text("naar hulpmenu", 420, 560)

  if(mouseIsPressed && 
    mouseX < 1050 &&
    mouseX > 385 &&
    mouseY < 600 &&
    mouseY > 500 ) {
    spelStatus = HULP;
  };

  // level 1 aanklikken

  if(mouseIsPressed && 
    mouseX < 385 &&
    mouseX > 175 &&
    mouseY < 320 &&
    mouseY > 220 ) {
    spelStatus = SPELEN1;
  };

  //level 2 aanklikken

  if(mouseIsPressed && 
    mouseX < 710 &&
    mouseX > 500 &&
    mouseY < 320 &&
    mouseY > 220 ) {
    spelStatus = SPELEN2;
  };

  //level 3 aanklikken
  if(mouseIsPressed && 
    mouseX < 1035 &&
    mouseX > 825 &&
    mouseY < 320 &&
    mouseY > 220 ) {
    spelStatus = SPELEN3;
  };
};

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN1) {
    moveLevel();
    beweegAlles();
    checkGameOver();
    CheckFinish();
    tekenAlles1();
    if (checkGameOver()) {
      spelerX = 615;
      spelerY = 575;
      spelStatus = GAMEOVER;
    }

    if(CheckFinish()) {
      spelStatus = FINISH;
      spelerX = 615;
      spelerY = 575;
    }
  }

  if (spelStatus === SPELEN2) {
    moveLevel();
    beweegAlles();
    tekenAlles2();
    CheckFinish();
    checkGameOver();
    if (checkGameOver()) {
      spelerX = 615;
      spelerY = 575;
      spelStatus = GAMEOVER;
    }
    if(CheckFinish()) {
      spelStatus = FINISH;
      spelerX = 615;
      spelerY = 575;
    }
  }

  if (spelStatus === SPELEN3) {
    moveLevel();
    beweegAlles();
    tekenAlles3();
    CheckFinish();
    checkGameOver();
    if (checkGameOver()) {
 
      spelStatus = GAMEOVER;
      spelerX = 615;
      spelerY = 575;
    }
    if(CheckFinish()) {
      spelStatus = FINISH;
      spelerX = 615;
      spelerY = 575;
    }
  }

  if (spelStatus === GAMEOVER) {
 spelerX = 615;
 spelerY = 575;
    // teken game-over scherm
    GameoverScherm();
  }

  if (spelStatus === START) { 
    //tekent startscherm
    StartScherm();
  }

  if (spelStatus === HULP) {
    //tekent hulpscherm
    HulpScherm();
  }

  if(spelStatus === FINISH) {
    //tekent finish scherm
    finishScherm();
  }
}

