class Rope{

    constructor(bodyA, pointB){
        
        var options = {
            
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness: 1,
            length: 220
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
      
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        fill(255);
        strokeWeight(3.5);
        stroke(255);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    
    }
}