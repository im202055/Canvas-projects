class Particle {
  constructor(x,y,rad){
  this.x=x
  this.y=y
this.x2=x
this.y2=y
//let  thatx=x
//  let thaty=y// XXX: thaty=y
  this.size=Math.random()*rad/5+1
  this.xspeed=Math.random()*3-1.5
  this.yspeed=Math.random()*3-1.5
  // this.xspeed=Math.random()*3-this.rad
  // this.yspeed=Math.random()*3-this.rad
   this.rad=rad
}

move(){
  this.x+=this.xspeed
  this.y+=this.yspeed
  // if(this.y>=canvas.height||this.y<=0){
  //   this.yspeed*=-1
  // }
  if(this.y>=this.y2+this.rad+yspeed||this.y<=this.y2-Math.abs(this.rad)){
    this.yspeed*=-1
  }
  if(this.x>=this.x2+this.rad+xspeed||this.x<=this.x2-Math.abs(this.rad)){
    this.xspeed*=-1
  }
  //if(this.y>=rad)
  // this.x+=xspeed
  // this.y+=yspeed
//this.x+this.size
//   let  distx =Math.abs(this.x2+this.rad)
//   if(this.x>=canvas.width||this.x<=0){
//   this.xspeed*=-1;
// }
// let  disty =Math.abs(this.y+this.rad)
// if(this.y>=canvas.height||this.y<=0){
//   this.yspeed*=-1;
// }

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
