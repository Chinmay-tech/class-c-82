var mouseEvent="empty";
var last_positiony;
var last_positionx;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="#00000";
width=1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
    

}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
    

}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
    

}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
   current_position_mousex=e.clientX-canvas.offsetLeft;
   current_position_mousey=e.clientY-canvas.offsetTop;
   if (mouseEvent=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width;
       console.log("last position of x and y coordintes=");
       console.log("x="+last_positionx+" y="+last_positiony);
       ctx.moveTo(last_positionx,last_positiony);
       console.log("current position of x and y coordinates=");
       console.log("x="+current_position_mousex +"y="+current_position_mousey);
       ctx.lineTo(current_position_mousex,current_position_mousey);
       ctx.stroke();

   }
   last_positionx=current_position_mousex;
   last_positiony=current_position_mousey;
   
}