class Thing {
  constructor(x,y,rad){
    this.x=x+Math.random(-5,5)
    this.y=y+Math.random(-5,5)
    this.rad=rad
    this.yspeed=yspeed*(Math.random(-2,2))
    this.xspeed=xspeed*(Math.random(-2,2))
  }
  draw(){
    //ctx.fillStyle='rgba(0,0,255,0.2)';
    ctx.strokeStyle='rgba(255,0,0,0.2)';
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
