class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        fill(255);
        stroke(255);
        image(this.image, 0, 0, 60, 60);
        pop();
    }
}