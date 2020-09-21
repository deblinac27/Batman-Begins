const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas;
var umbrella1;
var maxDrops = 500;
var drops = [];


function preload(){
    
}

function setup(){
    canvas = createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;

    umbrella1 = new Umbrella(200, 500);

    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0, 400)));
    }

    Engine.run(engine);
}

function draw(){
    background(85, 93, 107);
    
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update()
    }

    umbrella1.display();
    drawSprites();
}   

