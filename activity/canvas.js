//press mouse
let isPenDown=false;
board.addEventListener("mousedown",function(e){
    // path begin
    ctx.beginPath();
    // move to mouse pointer location
    //console.log(e);
    console.log("mousedown");
    let x = e.clientX;
    let y = e.clientY;

    ctx.moveTo(x,y);
     isPenDown=true;

})

// board.addEventListener("mousemove", function(event) {
// console.log("move");
// if(isPenDown)
//   myFunction(event);
// });


// function myFunction(e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   console.log(x,y);
//   ctx.lineTo(x, y);
//  ctx.stroke();
// }



board.addEventListener("mousemove",function(e){
    console.log("mousemove");
    console.log(isPenDown);
   if(isPenDown){
    
       let x=e.clientX;
       let y=e.clientY;

       ctx.lineTo(x, y);
       ctx.stroke();
   }
})

board.addEventListener("mouseup",function(){
    console.log("mouseup")
    isPenDown=false;
})

