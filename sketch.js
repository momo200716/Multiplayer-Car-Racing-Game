var database ;
var gameState = 0;
var playerCount;
var game, player, form;
var playerinfo;
var car1, car2, car3, car4;
var bee;
var im1, im2, im3, im4, track, ground;

function preload(){
im1 = loadImage("images/car1.png");
im2 = loadImage("images/car2.png");
im3 = loadImage("images/car3.png");
im4 = loadImage("images/car4.png");
track = loadImage("images/track.jpg");
ground = loadImage("images/track.png");

}


function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
   game = new Game()
   game.getState();
   game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}

