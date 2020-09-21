class Drops{
    constructor(x,y){
        
        var options = {
            'restitution':0.5,
            'friction':0.1,
            'density':1.5,
            isStatic:false 
        }
        this.x = x;
        this.y = y;
        this.radius = 7;
        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill("blue");
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

    update(){
        if(this.body.position.y > 760){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0, 400)});
        }
    }

}