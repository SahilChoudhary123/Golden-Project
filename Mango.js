class Mango {
  constructor(x,y) {
    var options = {
        isStatic: true,
        friction: 0.8, 
        density: 0.5,
        restitution: 1
    }
    this.body = Bodies.rectangle(x,y,50, 50,options);
    this.image = loadImage("Images/Images/mango.png");
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
    this.Visibility = 255;
  }
  display(){
    var pos = this.body.position;
    fill("brown");

    if(this.body.speed < 1){
      console.log(this.body.speed);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
    } 
  }
}
