class Particle {
  constructor(x,y,rad,xsp,ysp){
      this.size=Math.random()*rad/5+1
      this.x=x
      this.y=y
  // this.x=x+Math.random()*(rad*2)-rad
  // this.y=y+Math.random()*(rad*2)-rad
  // this.x=Math.random()*w
  // this.y=Math.random()*h
this.x2=x
this.y2=y

//let  thatx=x
//  let thaty=y// XXX: thaty=y

  // this.xspeed=Math.random()*(this.xsp-this.xsp/2)
  // this.yspeed=Math.random()*(this.ysp-this.ysp/2)
  this.xspeed=Math.random()*3-1.5
  this.yspeed=Math.random()*3-1.5
  //this.xspeed=xspeed
  //this.yspeed=yspeed
  // this.xspeed=Math.random()*3-this.rad
  // this.yspeed=Math.random()*3-this.rad
   this.rad=rad
}

move(){
if (this.size>0.23){
  this.size-=.04
}
  this.x+=this.xspeed
  this.y+=this.yspeed
  // if(this.y>=canvas.height||this.y<=0){
  //   this.yspeed*=-1
  // }
//   if (Math.abs(this.y2-this.y)<=this.rad && Math.abs(this.x2-this.x)<=this.rad){
// this.y+=yspeed
//   }
  // if(this.y>=this.y2+this.rad+this.yspeed||this.y<=this.y2-Math.abs(this.rad)-Math.abs(this.yspeed-yspeed)){
  //   this.yspeed*=-1
  //   this.ysp*=-1
  //
  // }
  // if(this.x>=this.x2+this.rad+xspeed||this.x<=this.x2-Math.abs(this.rad)-Math.abs(xspeed)){
  //   this.xspeed*=-1
  // }
  //if(this.y>=rad)
  // this.x+=xspeed
  // this.y+=yspeed
//this.x+this.size
//   let  distx =Math.abs(this.x2+this.rad)
  if(this.x>=canvas.width||this.x<=0){
  this.xspeed*=-1;
}
let  disty =Math.abs(this.y+this.rad)
if(this.y>=canvas.height||this.y<=0){
  this.yspeed*=-1;
}

}
draw(){
  ctx.fillStyle='rgba(50,0,255,2)';
  ctx.strokeStyle='purple';
  ctx.lineWidth=1;
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
  ctx.fill();
  ctx.stroke();

}
}
