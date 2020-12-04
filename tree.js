class Tree{
    constructor(x,y){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,600,600,options);
        this.image = loadImage("tree1.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        fill(255);
        stroke(255);
        image(this.image, 0, 0, 500, 500);
        pop();
    }
}