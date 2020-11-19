class Bob {

    constructor(x,y,color){ 
          
     var options = {
      isStatic: false,
      restitution: 1,
      friction: 0,
      frictionAir: 0.0,
      slop: 1,
      inertia: Infinity
     }
   
      this.body = Matter.Bodies.rectangle(x,y,55,55,options);
      this.x = x;
      this.y = y;
      this.color = color;
      World.add(world,this.body);
     }
   
     display(){
    
     var pos = this.body.position;
     var angle = this.body.angle;
     
     push()
     translate(pos.x, pos.y);
     rotate(angle);
     fill(this.color);
     stroke(255);
     strokeWeight(5);
     ellipse(0,0,50,50);
     pop();
    }
   }