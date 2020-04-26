let bugs = []; // array of Jitter objects
let score = 0;
var x = 0;
var ballSize = 40;
let spawner = 150;
let counter = 0;
let highScore = 0;
let gameState = true;
function setup() {
  createCanvas(600, 600);
    background(255);
}

function draw() {

  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
  
  if(gameState==true)
  {
  textAlign(CENTER, CENTER);
  textSize(100);
  text(score, width/2, height/2);

  push();
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(150);
  text(highScore, width/2, 370);
  pop();

  }
  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }
  
  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right
  if (frameCount % 60 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    counter++;
  }
  if (frameCount % spawner == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    bugs.push(new Jitter());
  }
  if(gameState==true)
  {
    check();
  }
}


// Jitter class
class Jitter {
  constructor() {
    
    this.x = random(50,550);
    this.y = 600;
    this.speed = 2;
    this.color = color(random(0,255),255, 255);
  }

  move() {
    let binary = [-10,10];
    this.x += random(-10,10) ;
    this.y += random(0,-10) ;
  }

  display() {
    push();
    fill(this.color);
    ellipse(this.x, this.y, ballSize, ballSize);
    pop();
  }
}
function check()
{
  for(let i=0; i< bugs.length; i++)
  {
    var distToBall= dist(bugs[i].x, bugs[i].y, mouseX, mouseY);
   if(bugs[i].y<0)
  {
    bugs.splice(i,1);
    clear();
    score--;
  }
  if (distToBall <ballSize/2 && mouseIsPressed){
    
    bugs.splice(i,1);
    score++;
    background(random(200,255), 255, 255);
    }
  }
  if(counter%10==0 && spawner != 25)
  {
    spawner+= -1;
  }
  if(score>highScore)
  {
    highScore=score;
  }
  if(score<0)
  {
    gameState= false;
    highScoreText = createP("High score: " + highScore);
  }
}
