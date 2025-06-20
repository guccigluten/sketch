let c1; let c2; let c3;
let blocks = []; let num =  5;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  c1 = color('#CCCA78');
  c2 = color('#140c0c');
  c3 = color('#CCCA78');
  
  let x = width/num;
  let h = height/num;
  
  for (let i=0; i<num; i++) {
    //num = random(1,10)
    blocks[i] = new Block(c1, c2, c3, x*i, h*i, h)
  }
}

function draw() {
  background(220);
  for (let i=0; i<num; i++) {
    blocks[i].display();
    blocks[i].move();
  }
  
  
}

