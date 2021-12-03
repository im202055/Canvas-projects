class Particle {
  constructor(x,y,rad,xsp,ysp){
      this.size=Math.random()*rad/5+1
      this.x=x
      this.y=y
      this.col='hsl('+ hue +',100%,50%)'

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
  this.xspeed=xspeed+Math.random()*3-1.5
  this.yspeed=yspeed+Math.random()*3-1.5
  //this.xspeed=xspeed
  //this.yspeed=yspeed
  // this.xspeed=Math.random()*3-this.rad
  // this.yspeed=Math.random()*3-this.rad
   this.rad=rad
}

move(){
if (this.size>0.2){
//  this.size-=.1
}
//this.x+=xspeed
//this.y+=yspeed
  this.x+=this.xspeed
  this.y+=this.yspeed
  if(this.x>=canvas.width||this.x<=0){
  this.xspeed*=-1;
}
let  disty =Math.abs(this.y+this.rad)
if(this.y>=canvas.height||this.y<=0){
  this.yspeed*=-1;
}
  for(let i = 0;i<ap.length;i++){
    for(let j=i;j<ap.length;j++){
      const dx=ap[i].x-this.x2
      const dy=ap[i].y-this.y2
      const distance=Math.sqrt(dx*dx+dy*dy)
      if (distance>=this.rad||distance<=0){
        // this.xspeed*=-1
        // this.yspeed*=-1
              if (distance<500&&distance>200){
        ctx.strokeStyle='hsl('+ hue +',100%,50%)';
        ctx.lineWidth=.01;

        ctx.beginPath();
        //ctx.strokeStyle=ap[i].col

        ctx.moveTo(ap[i].x,ap[i].y)
        ctx.lineTo(ap[j].x,ap[j].y)
        ctx.stroke()}
      }
    }
  }
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

//this.x+this.size
//   let  distx =Math.abs(this.x2+this.rad)


}

draw(){
  //ctx.fillStyle='hsl('+ hue +',100%,50%)'
  //ctx.fillStyle=this.col
  hue+=.01

//  ctx.fillStyle='rgba(0,0,255,0.2)';
  ctx.strokeStyle='rgba(255,0,0,0.2)';
  ctx.lineWidth=1;
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
  ctx.fill();
  ctx.stroke();


}
}
