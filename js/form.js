class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("PLAY!")
        this.greeting = createElement('h1')
        this.reset = createButton("Replay!")
    }
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}
    display(){
        var Title = createElement('h1')
        Title.html("Cabbie Game")
        Title.position(displayWidth/2,100)
       
        this.input.position(displayWidth/2,displayHeight/2)
      
       this.button.position(displayWidth/2, displayHeight/2+100)
       this.reset.position(displayWidth-100, 20)
        var greeting = createElement('h1')
        this.button.mousePressed(()=>{
           this.input.hide()
           this.button.hide()
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.updateData(playerCount)
            player.update()
            this.greeting.html("Hello"+ player.name)
            this.greeting.position(displayWidth/2, displayHeight/2)
            
            
        })
        this.reset.mousePressed(()=>{
            player.updateData(0);
            game.update(0);
            Player.playerCount();
            Player.updateRank(0);
        })

    }
}