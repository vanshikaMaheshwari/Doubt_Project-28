class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        //this.width = width;
        //this.height = height;
        this.image = loadImage("Grass.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        fill(255);
        stroke(255);
        image(this.image, 0, 0, 1000, 70);
        pop();
    }
}