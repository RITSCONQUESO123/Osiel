var fondo1
var fondo2
var fondo3
var fondo4
var nave1
var nave2
var nave3
var nave4
var alien1
var alien2
var alien3
var alien4
var obstaculo1
var obstaculo2
var obstaculo3
var obstaculo4

function preload (){
// fondo1 = loadImage("imagenes/Espacio.jpg");
// nave1Img = loadImage("imagenes/Nave azul 1.png")
// obstaculo1Img = loadImage ("imagenes/Asteroide1.png")
}
function setup (){
 createCanvas(1200, 600)
 nave1 = createSprite (200, 300, 30, 30);
 //nave1.addImage(nave1Img)
 //nave1.rotation = 90
 
}
function draw (){
background ("black");
 drawSprites()
 asteroides()



}
function asteroides(){
    if(frameCount %70 === 0){
        obstaculo1 = createSprite (1200, 300, 30, 30);
        obstaculo1.velocityX = -5;
        obstaculo1.y = Math.round(random(50, 550));
        //obstaculo1.addImage (obstaculo1Img);
    }
}