var cvs = document.getElementById("canvas");
var player = new Image();
var notplayer = new Image();
var backgroundImage = new Image();

cvs.width=window.innerWidth-5;
cvs.height = window.innerHeight-5;

 cvs.onkeydown = move;
backgroundImage.src = "img/7.jpg";
player.src ="img/lol.png";
notplayer.src ="img/Копье.png";
backgroundImage.width = cvs.width;
backgroundImage.height = cvs.height;

var x = 40;
var y = 0;
var xn = 300;
var yn = 300;