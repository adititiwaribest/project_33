class snow{
    constructor(x,y){
        var options={
            restitution:0.03
        }
    this.image=loadImage("snow4.webp")
    this.body= Bodies.rectangle(x,y,50,50,options);
    World.add(world,this.body);
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate (this.body.angle);
  imageMode(CENTER);
    image(this.image,0,50,50)
pop()
}
}