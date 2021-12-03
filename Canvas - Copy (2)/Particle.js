class Particle {
  constructor(x,y,rad){
  this.x=x
  this.y=y
this.x2=x
this.y2=y
//let  thatx=x
//  let thaty=y// XXX: thaty=y
  this.size=Math.random()*5+1
   this.xspeed=Math.random()*3-1.5
   this.yspeed=Math.random()*3-1.5
   this.rad=rad
}
move(){
  this.x+=this.xspeed//+xspeed
  this.y+=this.yspeed//+yspeed
  //if(this.y>=rad)


  let  distx =Math.abs(this.x2+this.rad)
  if (this.x-this.rad>=0){
  this.xspeed*=-1;
}
let  disty =Math.abs(this.y-this.y2)
  if (this.y-this.rad>=0){
  this.yspeed*=-1;
}

}
draw(){
  ctx.fillStyle='rgba(0,0,255,0.2)';
  ctx.strokeStyle='red';
  ctx.lineWidth=1;
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
  ctx.fill();
  ctx.stroke();

}
}
