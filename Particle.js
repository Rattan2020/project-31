class Particle {

constructor(x,y,r){

var options={
restitution :1,
isStatic:false

}
this.r=r;
this.color=color(random(255),random(255),random(255));
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);

}

display(){

var pos=this.body.position;
var angle=this.body.angle;

push();

translate(pos.x,pos.y); 
rotate(angle);
fill(this.color);
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);

pop();
}




}