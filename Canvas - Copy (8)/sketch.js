const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let yspeed=.01;
let xspeed=.01;
let y=0
let r=Math.random()*20
let ar =[]
let ap=[]
let api=[]
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
w=canvas.width
h=canvas.height

window.addEventListener('resize',function(){
  canvas.width=window.innerWidth;
   canvas.height=window.innerHeight;
 });

const mouse = {
  x:undefined,
  y:undefined
}
canvas.addEventListener('click',function(event){

  //
  yspeed=Math.random()+2;
  xspeed=Math.random();
  mouse.x=event.x;
  mouse.y=event.y;
   ar.push(new Thing(mouse.x,mouse.y,Math.random()*100))

})

canvas.addEventListener('mousemove',function(event){


  //mouse.x=event.x;
  //mouse.y=event.y;
})

// for(i =0;i<100;i++){
//   rad=Math.random()*100
//   //ar[i]=new Thing(i*100,y,rad)
//   ar.push(new Thing(i*10,y,rad))
//   }
  // ctx.fillStyle='rgba(0,0,0,.05)'
  // ctx.fillRect(0,0,w,h);
animate();

//setInterval(start, .1)
console.log(ctx)

function animate(){
  //ctx.clearRect(0,0,w,h);
  ctx.fillStyle='rgba(0,0,0,.03)'
  ctx.fillRect(0,0,w,h);
  //ap.push(new Particle(Math.random()*w,Math.random()*h,50,0,0))

  //ar.push(new Thing(mouse.x,mouse.y,Math.random()*100))
  init()
  handle()
    requestAnimationFrame(animate);
}
function init(){
  for(let i=0;i<ar.length;i++){
    ap.push(new Particle(ar[i].x,ar[i].y,ar[i].rad,ar[i].xspeed,ar[i].yspeed))
    if (ar.length>=10){
      //ap.pop()
    }
    if (ap.length>=100){
      ap.shift();
    }

}
}
function handle(){
  for(let i = 0;i<ap.length;i++){
    ap[i].draw()
    ap[i].move()
  }
    for (let bub of ar){
      bub.draw()
      bub.move()
    }
}
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}