class Thing {
  constructor(x,y,rad){
    this.x=x
    this.y=y
    this.rad=rad
    this.yspeed=yspeed
    this.xspeed=xspeed
  }
  draw(){
    ctx.fillStyle='rgba(0,0,255,0.2)';
    ctx.strokeStyle='red';
    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.rad,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();

  }
  move(){
    this.y+=this.yspeed//*this.rad;
    if(this.y>=canvas.height||this.y<=0){
      this.yspeed*=-1
    }

    this.x+=this.xspeed//*this.rad;

    if(this.x>=canvas.width||this.x<=0){
      this.xspeed*=-1
    }
  }
}
