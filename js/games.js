//Задание начального окна игры
var cvs = document.getElementById("canvas");
cvs.width= window.innerWidth; // Размеры фул экрана
cvs.height = window.innerHeight;
cvs.onkeydown = move;

var dx = cvs.width / 100;
var dy = cvs.height / 100;

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
var xn = 100* dx;
var yn = cvs.height-60;



player.onload = draw();
var a = 0;

function draw(){
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.drawImage(backgroundImage,0,0, 100*dx, 100*dy); //Отрисовка фона

    if(a === 0) //условие реализущее спрайт полета/ходьбы
        ctx.drawImage(player,x,y);
    else if (a === 40) a=0;
    else {
        if(a<20)
        {
            ctx.drawImage(player1,x,y);
        }
        else
            ctx.drawImage(player,x,y);
        a++;
    }

    ctx.drawImage (floor, xn - 100 * dx, 90*dy, 100*dx, 10*dy); //Отрисовка пола
    ctx.drawImage (floor, xn, 90*dy,100*dx, 10*dy);

    //ctx.drawImage (nzoths,cvs.width-400,cvs.height-700);
    if (y < cvs.height - 60 - player.height) y++;
    xn=xn-5;
    if(xn <= 0) //условие проверки конца блока
    {
        xn = 100*dx;
    }
    requestAnimationFrame(draw);
}

function move(e)
{
    y=y-10;
    a=1;
    console.log("Это xn" + xn);
    console.log("Gh");
}

document.addEventListener("keydown", move);