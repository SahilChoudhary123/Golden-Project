class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("Images/Images/tree.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("brown");
      this.body.scale = 2;
      image(this.image, pos.x, pos.y, this.width, this.height);
  }
}
