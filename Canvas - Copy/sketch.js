const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const recorder = new CanvasRecorder(canvas);

let yspeed=.01;
let y=20
let r=Math.random()*20
let ar =[]
let click =0
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
// canvas.width=1080;
// canvas.height=1080;
w=canvas.width
h=canvas.height

canvas.addEventListener('click',function(event){
if (click==0)
{
  recorder.start();
}
if (click>0)
{
  recorder.stop();
  recorder.save('busy_motion.webm');
}
click+=1;
})
class Thing{
  constructor(x,y,rad){
    this.x=x
    this.y=y
    this.rad=rad
    this.yspeed=yspeed
  }
  draw(){
    ctx.fillStyle='rgba(0,0,255,0.2)';
    ctx.strokeStyle='rgba(255,0,255,0.1)';
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.rad,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();

  }
  move(){
    this.y+=this.yspeed*this.rad;
    if(this.y>=canvas.height||this.y<=0){
      this.yspeed*=-1
    }
  }
}
for(i =0;i<100;i++){
  rad=Math.random()*100
  //ar[i]=new Thing(i*100,y,rad)
  ar.push(new Thing(i*10,y,rad))
   //rad*=i/100
    //thing(i*100,y,rad);

    //move(rad);

  }

// window.addEventListener('resize',function(){
//   canvas.width=window.innerWidth;
//   canvas.height=window.innerHeight;
//   for(let i =0;i<10;i++){
//     thing(i*100,y);
//     move();
//   }
// });
// ctx.fillStyle='rgba(0,0,0,0.01)'
// ctx.fillRect(0,0,w,h);

  setInterval(start, 10)

console.log(ctx)
function start(){
  ctx.fillStyle='rgba(0,0,0,.5)'
  ctx.fillRect(0,0,w,h);
    for (let bub of ar){
      bub.draw()
      bub.move()
    }

}

//thing();
// function move(rad){
// y+=yspeed*rad;
// if(y>=canvas.height||y<=0){
//   yspeed*=-1
// }

//}

function thing(x,y,rad){
ctx.fillStyle='rgba(0,0,255,0.2)';
ctx.strokeStyle='red';
ctx.lineWidth=1;
ctx.beginPath();
ctx.arc(x,y,rad,0,Math.PI*2);
ctx.fill();
ctx.stroke();
  x-=1;

}
