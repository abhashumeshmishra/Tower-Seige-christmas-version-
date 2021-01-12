const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform,platformImg;
var block1,block2;
var boxImg,box,box2;
var gameState = "on Slingshot";


function preload() {
    backgroundImg = loadImage("1914.jpg");
    polygon_img = loadImage("hjk.png");
    boxImg = loadImage("45.jpg");
    SantaClaus = loadImage("op.png");
    thinkingcloud = loadImage("```.png");
    informationplate = loadImage("14554.jpg");
}

function setup(){
    var canvas = createCanvas(1400,500);

    engine = Engine.create();
    world = engine.world;
    //block1 = new blocks(435,390,40,60);
    blocking1 = new blocks(593,200,40,40);

    blockes1 = new blocks(572,250,40,40);
    blockes2 = new blocks(615,250,40,40);
    blockes3 = new blocks(615,250,40,40);
    blockes4 = new blocks(1000,180,40,40);

    blocked1 = new blocks(553,299,40,40);
    blocked2 = new blocks(593,299,40,40);
    blocked3 = new blocks(970,250,40,40);
    blocked4 = new blocks(1010,250,40,40);

    blockno1 = new blocks(510,350,40,40);
    blockno2 = new blocks(550,350,40,40);
    blockno3 = new blocks(590,350,40,40);
    blockno4 = new blocks(630,350,40,40);
    blockno5 = new blocks(670,350,40,40);
    blockno6 = new blocks(950,290,40,40);
    blockno7 = new blocks(980,290,40,40);
    blockno8 = new blocks(1010,290,40,40);
    blockno9 = new blocks(1040,290,40,40);

    block2 = new blocks(490,399,40,40);
    block3 = new blocks(525,399,40,40);
    block4 = new blocks(560,399,40,40);
    block5 = new blocks(595,399,40,40);
    block6 = new blocks(635,399,40,40);
    block7 = new blocks(665,399,40,40);
    block8 = new blocks(699,399,40,40);
    block9 = new blocks(930,304,40,40);
    block10 = new blocks(960,304,40,40);
    block11 = new blocks(990,304,40,40);
    block12 = new blocks(1020,304,40,40);
    block13 = new blocks(1050,304,40,40);
    block14 = new blocks(1080,304,40,40);
    ground = new Ground(600,400,400,20);
    platform = new Ground(1000, 305, 300, 20);

    ball = Bodies.circle(230,200,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:230,y:200});

    var options ={
        isStatic : true
    }
    box = Bodies.rectangle(1000,466,20,20,options);
    World.add(world,box);
    
    var options ={
        isStatic : true
    }
    box2 = Bodies.rectangle(601,561,20,20,options);
    World.add(world,box2);

    var options ={
        isStatic : true
    }
    snatclaus = Bodies.rectangle(1270,360,90,90,options);
    World.add(world,snatclaus);

    var options ={
        isStatic : true
    }
    thinkingcloud1 = Bodies.rectangle(1230,175,90,90,options);
    World.add(world,thinkingcloud1);

    var options ={
        isStatic : true
    }
    informationplate1 = Bodies.rectangle(330,10,90,90,options);
    World.add(world,informationplate1);

}

function draw(){
    rectMode(CENTER);
    push();
    background(backgroundImg);
    pop();
    Engine.update(engine);
    ground.display();
    //block1.display();
    push();
    strokeWeight(0);
    fill(37, 50, 113);
    blocking1.display();
    pop();

    push();
    strokeWeight(0);
    fill(60, 57, 194);
    blockes1.display();
    blockes2.display();
    blockes3.display();
    pop();

    push();
    strokeWeight(0);
    fill(60, 57, 194);
    blockes4.display();
    pop();

    push();
    strokeWeight(0);
    fill(50, 70, 203);
    blocked1.display();
    blocked2.display();
    blocked3.display();
    blocked4.display();
    pop();

    push();
    strokeWeight(0);
    fill(42, 86, 211);
    blockno1.display();
    blockno2.display();
    blockno3.display();
    blockno4.display();
    blockno5.display();
    blockno6.display();
    blockno7.display();
    blockno8.display();
    blockno9.display();
    pop();

    push();
    strokeWeight(0);
    fill(39, 99, 216);
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    pop();
    platform.display();
    slingShot.display();


    push();
    imageMode(CENTER);
    image(polygon_img ,ball.position.x,ball.position.y,60,60);
    pop();

    push();
    imageMode(CENTER);
    image(boxImg,box.position.x,box.position.y,301,300);
    pop();

    push();
    imageMode(CENTER);
    image(boxImg,box2.position.x,box2.position.y,403,300);
    pop();

    push();
    imageMode(CENTER);
    image(SantaClaus,snatclaus.position.x,snatclaus.position.y,290,290);
    pop();

    push();
    imageMode(CENTER);
    image(thinkingcloud,thinkingcloud1.position.x,thinkingcloud1.position.y,190,95);
    pop();

    push();
    imageMode(CENTER);
    image(boxImg,informationplate1.position.x,informationplate1.position.y,660,60);
    pop();

    push();
    fill("white");
    strokeWeight(0);
    stroke("white");
    textSize(10);
    text("HEY! ENJOY MY PROJECT",1170,160);
    pop();

    push();
    fill("white");
    strokeWeight(1);
    stroke("white");
    textSize(22);
    text("HO! HO! HO!",1168,182);
    pop();

    push();
    fill("white");
    strokeWeight(1);
    stroke("white");
    textSize(19);
    text("P R E S S   S P A C E   B A R   T O   G E T   A   C H A N C E   A G A I N",17,26);
    pop();
}


function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.ball);
    }
}