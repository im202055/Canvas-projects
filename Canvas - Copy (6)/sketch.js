const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let yspeed=.1;
let xspeed=.1;
let y=20
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
   ar.push(new Thing(mouse.x,mouse.y,Math.random()*20))

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
function init(){

  for(let i=0;i<ar.length;i++){
    ap.push(new Particle(ar[i].x,ar[i].y,ar[i].rad))
}
}
function animate(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle='rgba(0,0,0,.03)'
  ctx.fillRect(0,0,w,h);
  //ar.push(new Thing(mouse.x,mouse.y,Math.random()*100))
  init()
  for(let i = 0;i<ap.length;i++){
    //api.push(ap)

    ap[i].draw()
    ap[i].move()
  }
    for (let bub of ar){
//       ap.push(new Particle(ar[0].x,ar[0].y,ar[0].rad))
// if (ap.length>=500){
//   ap=[]
// }
      bub.draw()
      bub.move()
    }

    // for(let i = 0;i<api.length;i++){
    //   api[i].draw()
    //   api[i].move()
    // }
    // for (let bub of ap){
    //
    //   bub.draw()
    //   bub.move()
    // }

    requestAnimationFrame(animate);

}
