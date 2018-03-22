function setup(){
  createCanvas(300,300);
  background(0);
}
  
function draw(){
  frameRate(5);
  
  stroke(random(256),0,0);
  strokeWeight(random(3));
  line(random(50,90), random(10,20), random(10,50), random(80,90));
  
  stroke(random(256),0,0);
  strokeWeight(random(3));
  line(random(250,290), random(210,220), random(210,250), random(280,290));
  
  stroke(0,random(256),0);
  strokeWeight(random(3));
  line(random(10,50), random(110,120), random(10,50), random(180,190));
  
  stroke(0,random(256),0);
  strokeWeight(random(3));
  line(random(250,290), random(110,120), random(250,290), random(180,190));
  
  stroke(0,0,random(256));
  strokeWeight(random(3));
  line(random(10,50), random(210,220), random(50,90), random(280,290));
  
  stroke(0,0,random(256));
  strokeWeight(random(3));
  line(random(210,250), random(10,20), random(250,290), random(80,90));
  
  stroke(random(256),0,random(256));
  strokeWeight(random(3));
  line(random(110,120), random(10,40), random(180,190), random(10,40));
  
  stroke(random(256),0,random(256));
  strokeWeight(random(3));
  line(random(110,120), random(260,290), random(180,190), random(260,290));
  
  stroke(random(256),100,100);
  strokeWeight(random(3));
  noFill();
  ellipse(random(140,160),random(140,160), random(50,120), random(50,120) );
}