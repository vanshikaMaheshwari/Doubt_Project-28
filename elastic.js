class Elastic{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 5
        }
        this.pointB = pointB
        this.elastic = Constraint.create(options);
        World.add(world,this.elastic);
    }

    attach(body){
        this.elastic.bodyA = body;
    }

    fly(){
        this.elastic.bodyA = null;
    }

    display(){
        if(this.elastic.bodyA){
        var pointA = this.elastic.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(5);
        fill("purple");
        stroke("purple");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
}