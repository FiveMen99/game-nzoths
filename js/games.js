//Задание начального окна игры
var cvs = document.getElementById("canvas");
cvs.width= window.outerWidth;
cvs.height = window.outerHeight - 2;
cvs.onkeydown = move;


var ctx = cvs.getContext("2d");
var windowWidth = window.outerWidth;
var windowHeight = window.outerHeight;

//Установка картинок и начальных координат для игрока
var player = new Image();
player.src ="img/Sovukh.png";

var floor = new Image();
floor.src ="img/floor1.png";


var backgroundImage = new Image();
backgroundImage.src = "img/7.jpg";

var x = 40;
var y = 0;
var xn = 1000;
var yn = 500;

//Когда картинка игрока загрузилась, игра начинается
player.onload = draw();
console.log("this is player height"+ player.height);

function draw(){
    console.log()
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    ctx.drawImage(backgroundImage,0,0);
    ctx.drawImage(player,x,y);
    ctx.drawImage (floor,xn,yn);
    if (y < 500 - player.height) y++;
    xn=xn-5;
    if(xn<-50) //условие проверки конца блока
    {
        xn=1000;
    }
 //   if(y>=yn && y<=yn+200 && x>=xn+60 && x<=xn+200 ) //условие проверки проигрыша игрока
    //   {
   // console.log("popal" + "vx игрока равен =" + x + "vy игрока равен =" + y + " x предмета равен =" + xn + " y премета равен" + yn)
   // }
   // else  //отрисовка блоков
   // {
        requestAnimationFrame(draw);
    //}
}


function move(e) {
 y=y-10;
 console.log(e.keyCode);
}
document.addEventListener("keydown", move);

