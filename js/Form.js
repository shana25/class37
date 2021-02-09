class Form 
{
    constructor()
    {
       this.input= createInput("enter name")
       this.button= createButton("PLAY")
       this.greeting= createElement("h2")
    }

    hide()
    {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display()
    {
      var title = createElement('h2');
      title.html("Car Racing Game");
      title.position(120,15);
      
      
      this.input.position(130,150);
      this.button.position(280,200);

      this.button.mousePressed(()=>
                          {
                               this.input.hide();
                                this.button.hide();
  
                                player.name = this.input.value();

                                playerCount= playerCount+1;
                                player.index=playerCount;

                               player.update();
                               player.updateCount(playerCount);

                                this.greeting.html("Hello " + player.name );
                                this.greeting.position(350,65);
                         });

    }
}
