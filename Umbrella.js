class Umbrella{
    constructor(x,y){
        var options = {
            'restitution':0.5,
            'friction':0.1,
            'density':1.5,
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.radius = 30;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world,this.body);
        this.image = loadImage('Man.png');

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,150,150,300);
        pop();
    }
}