//Задание начального окна игры
var cvs = document.getElementById("canvas");
cvs.width= window.innerWidth;
cvs.height = window.innerHeight;
cvs.onkeydown = move;


var ctx = cvs.getContext("2d");

//Установка картинок и начальных координат для игрока
var player = new Image();
player.src ="img/sovukh.png";

var player1 = new Image();
player1.src ="img/sovukh1.png";

var floor = new Image();
floor.src ="img/floor1.png";

var nzoths = new Image();
nzoths.src ="img/nzoths.png";



var backgroundImage = new Image();
backgroundImage.src = "img/7.jpg";

var x = 40;
var y = 0;
var xn = 1000;
var yn = cvs.height-60;


player.onload = draw();
var a =0;
function draw(){
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    ctx.drawImage(backgroundImage,0,0);
    if(a==0)
        ctx.drawImage(player,x,y);
    else
    {
        if(a<20)
        {
            ctx.drawImage(player1,x,y);
        }
        else
            ctx.drawImage(player,x,y);
        a++;
    }

    if(a==40)
        a=0;

    ctx.drawImage (floor,xn,yn);
    ctx.drawImage (floor,xn-1014,yn);
    ctx.drawImage (floor,xn+1014,yn);
    ctx.drawImage (nzoths,cvs.width-400,cvs.height-700);
    if (y < cvs.height-60 - player.height) y++;
    xn=xn-5;
    if(xn<-50) //условие проверки конца блока
    {
        xn=1000;
    }
        requestAnimationFrame(draw);
}

function move(e)
{
 y=y-10;
 a=1;
 console.log(e.keyCode);
}

document.addEventListener("keydown", move);
