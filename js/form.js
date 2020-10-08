class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);

        this.input.position(130, 160);

        this.button.position(270, 160);

        var greeting = createElement('h3');

        this.button.mousePressed(()=>{
            this.input.hide(); 
            this.button.hide();
            playerCount += 1;
            player.updateCount(playerCount);
            player.name = this.input.value();
           
            player.update();
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(130, 160);
        })
    }
}