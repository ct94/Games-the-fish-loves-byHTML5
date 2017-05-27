var can1,can2,ctx1,ctx2;

var lastTime;//上一帧的执行时间
var deltaTime;//两帧间隔

var bgImg=new Image();

var ane;

document.body.onload=game;
function game() {
    // console.log("load");
    init();
    lastTime=Date.now();
    deltaTime=0;
    gameloop();
}

function init() {
    can1=document.getElementById("canvas1");//fish dust Ui circle
    ctx1=can1.getContext("2d");
    can2=document.getElementById("canvas2");//bg ane fruit
    ctx2=can2.getContext("2d");

    bgImg.src="./src/background.jpg";
    canWidth=can1.width;
    canHeight=can1.height;

    ane=new aneObj();//全局
    ane.init();
}
function gameloop() {
    //当前绘制完成后，根据机器配置设置适用的（动态间隔）来循环绘制，比setinterval，settimeout更科学
    //兼容性 问题 commonfunction.js
    window.requestAnimFrame(gameloop);
    // window.setInterval(gameloop,30);
    var now=Date.now();
    deltaTime=now-lastTime;//因为顺序执行
    lastTime=now;//更新上一次的时间

    drawBackground();//背景循环绘制？
    ane.draw();
    // console.log(deltaTime);
}