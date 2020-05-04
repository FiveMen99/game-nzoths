var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
cvs.width=window.innerWidth-20;
cvs.height = window.innerHeight-20;
var player = new Image();
var notplayer = new Image();
var phone = new Image();
var nzoth = new Image();
nzoth.src="img/Нзот.png";
var nzoth1 = new Image();
nzoth1.src="img/Нзот1.png";

var x = 40;
var y = 0;
var xn = 300;
var yn = 300;
cvs.onkeydown = move;
phone.src = "img/7.jpg";
player.src ="img/lol.png";
notplayer.src ="img/Копье.png";
phone.width = 450;
phone.height =4000;

addEventListener("keydown", function(event) {
    if (event.keyCode == 37)
        console.log("123");
});












function move(e) {
    console.log(e.keyCode);
    switch(e.keyCode){

        case 87:  // если нажата клавиша влево
            console.log("влево");
            break;
        case 38:   // если нажата клавиша вверх
                console.log("вверх");
            break;
        case 39:   // если нажата клавиша вправо
            console.log("вправо");
            break;
        case 40:   // если нажата клавиша вниз
            console.log("вниз");
            break;
        case "KeyA":
                console.log("pressA");
            break;

    }
 y=y-10;
}
document.addEventListener("keydown", move);
var a=0;
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(phone,0,0);
    ctx.drawImage(player,x,y);
    ctx.drawImage(notplayer,xn,yn);
    if(a>=0 && a<50)
    {
        ctx.drawImage(nzoth,1020,-150);
        a++;
        console.log(a);
        ;
    }
    if(a>=50 && a<=100)
    {
        ctx.drawImage(nzoth1,1020,-150);
        a++;
        console.log(a);
    }
    if(a==100)
    {
        a=0;
    }
    y=y+1;
    xn=xn-10;
    if(xn<-50)
    {
        xn=1000;
    }
    if(y>=yn && y<=yn+200 && x>=xn+60 && x<=xn+200 )
    {
        console.log("popal" + "vx игрока равен =" + x + "vy игрока равен =" + y + " x предмета равен =" + xn + " y премета равен" + yn)
    }
    else
    {
        requestAnimationFrame(draw);
    }
}
player.onload =draw();
