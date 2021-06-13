 /// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 89; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten


var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;



/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("skyblue");
  rect(0, 0, width - 2, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    
fill("red")
circle(x+1000 , y+50, 50, 150);
circle(x+1300 , y+170, 50, 150);
circle(x+1400 , y+290, 50, 150);
circle(x+1400 , y+410, 50, 150);
circle(x+1750 , y+530, 50, 150);
circle(x+1600 , y+550, 50, 150);
circle(x+2000 , y+650, 50, 150);
circle(x+2400 , y+50, 50, 150);
circle(x+2100 , y+170, 50, 150);
circle(x+2250 , y+290, 50, 150);
circle(x+2500 , y+410, 50, 150);
circle(x+2650 , y+530, 50, 150);
circle(x+2870 , y+550, 50, 150);
circle(x+2990, y+650, 50, 150);
circle(x+3100 , y+50, 50, 150);
circle(x+3500, y+170, 50, 150);
circle(x+3200, y+290, 50, 150);
circle(x+3400, y+410, 50, 150);
circle(x+3700, y+530, 50, 150);
circle(x+4000 , y+550, 50, 150);
circle(x+3900, y+650, 50, 150);
circle(x+4600 , y+50, 50, 150);
circle(x+4250 , y+170, 50, 150);
circle(x+44500 , y+290, 50, 150);
circle(x+4450 , y+410, 50, 150);
circle(x+4790, y+530, 50, 150);
circle(x+4950 , y+550, 50, 150);
circle(x+5300 , y+650, 50, 150);
circle(x+5500 , y+50, 50, 150);
circle(x+5170, y+170, 50, 150);
circle(x+5600, y+290, 50, 150);
circle(x+5750 , y+410, 50, 150);
circle(x+6050 , y+530, 50, 150);
circle(x+6500 , y+550, 50, 150);
circle(x+6140 , y+650, 50, 150);
circle(x+6400 , y+50, 50, 150);
circle(x+6310 , y+170, 50, 150);
circle(x+6090, y+290, 50, 150);
circle(x+6650 , y+410, 50, 150);
circle(x+6760, y+530, 50, 150);
circle(x+7040 , y+550, 50, 150);
circle(x+6780, y+650, 50, 150);
circle(x+6860 , y+50, 50, 150);
circle(x+6910 , y+170, 50, 150);
circle(x+8000 , y+290, 50, 150);
circle(x+8000 , y+410, 50, 150);
circle(x+8000 , y+530, 50, 150);
circle(x+8000 , y+550, 50, 150);
circle(x+8000 , y+650, 50, 150);
circle(x+8000 , y+50, 50, 150);
circle(x+8000 , y+170, 50, 150);
circle(x+8000 , y+290, 50, 150);











































};






/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  
 
  
  //lijf
  fill("white");
  ellipse(x+200, y+300, 100, 30);

  

 



};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */


var beweegVijand = function() {
  vijandX = vijandX - 15

}; 







/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */



var beweegSpeler = function() { 

if (keyIsDown(KEY_UP)) { spelerY = spelerY - 5;
}
if (keyIsDown(KEY_LEFT)) { spelerX = spelerX- 5;
}
if (keyIsDown(KEY_RIGHT)) { spelerX = spelerX+ 5;
}
if (keyIsDown(KEY_DOWN)) { spelerY = spelerY+ 5;
}




if (spelerX<50) {spelerX=50;}

if (spelerX>1230) {spelerX=1230;}











};















/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
 
  
  
  
  
  return false;
}

;


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
      









};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1220, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('green');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      
      
      }
      break;
  case GAMEOVER:
      text(100, 100, "GameOver")
  
  }
}
