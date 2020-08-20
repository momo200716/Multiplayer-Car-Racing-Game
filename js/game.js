class Game{
   constructor(){

   }
getState(){
var gameRef = database.ref('gameState')
gameRef.on("value", function(data){
   gameState = data.val()
})
}
update(state){
    database.ref('/').update({gameState:state})
}
play(){
    form.hide()
    textSize(15)
    text("Game begins!", 250,100)
    Player.getplayerinfo()
    player.getPlayerscore();
    if(playerinfo!==undefined){
        background("#C68767")
        image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)
       var index = 0;
       var x = 100;
       var y;
       for(var pos1 in playerinfo){
           index = index+1;
           x = x+200;
           y = displayHeight - playerinfo[pos1].distance
           bee[index-1].x = x;
           bee[index-1].y = y;
           if(index === player.index){
               stroke(4)
               fill("white")
               ellipse(x, y, 60, 60);

               bee[index-1].shapeColor = "red"
               camera.position.x = displayWidth/2;
               camera.position.y = bee[index-1].y
           }

       }
    }  

    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance+= 50
        player.update();
        
    }
    if(player.distance > 4300){
        gameState = 2;
        player.rank+= 1;
        Player.updateRank(player.rank)
        text("Your rank:"+player.rank, displayWidth/2-30, y-100)
    }
    drawSprites();
}


async start(){
    if(gameState === 0){
        player = new Player()
        var countref = await database.ref('playerCount').once("value")
        if(countref.exists()){
            playerCount = countref.val();
        player.getplayerCount()
        }
        form = new Form()
        form.display();
    }
    car1 = createSprite(100, 300 );
    car1.addImage(im1)
    car2 = createSprite(300, 300 );
    car2.addImage(im2)
    car3 = createSprite(500, 300 );
    car3.addImage(im3)
    car4 = createSprite(700, 300 );
    car4.addImage(im4)

    bee = [car1, car2, car3, car4];
}
end(){
    console.log("GAME ENDED")
    console.log(player.rank)
}
}
