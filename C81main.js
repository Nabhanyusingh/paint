var last_position_of_x,last_position_of_y;
color="yellow";
width_of_line=5;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992)
    {
        document.getElementById("myCanvas").width=new_width;
        document.body.style.overflow="hidden";
    }
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    color=document.getElementById("color").value;
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
cavas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_);
   ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}