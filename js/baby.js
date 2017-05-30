/**
 * Created by Administrator on 2017/5/30.
 */
var babyObj=function () {
    this.x=0;
    this.y=0;
    this.angle=0;
    this.babyEye=[];
    this.babyBody=[];
    this.babyTail=[];

    this.babyTailTimer=0;
    this.babyTailCount=0;

    this.babyEyeTimer=0;
    this.babyEyeCount=0;
    this.babyEyeInterval=0;

    this.babyBodyTimer=0;
    this.babyBodyCount=0;
};
babyObj.prototype.init=function () {
    this.x=canWidth/2;//初始在画布中间 400
    this.y=canHeight/2;//300
    this.angle=0;

    //尾巴序列 初始化
    for(var i=0;i<8;i++){
        this.babyTail[i]=new Image();
        this.babyTail[i].src="./src/babyTail"+i+".png";
    }

    //眼睛序列初始化
    for(i=0;i<2;i++){
        this.babyEye[i]=new Image();
        this.babyEye[i].src="./src/babyEye"+i+".png";
    }

    //body初始化
    for(i=0;i<20;i++){
        this.babyBody[i]=new Image();
        this.babyBody[i].src="./src/babyFade"+i+".png";
    }
};
babyObj.prototype.draw=function () {
    this.x=lerpDistance(mom.x,this.x,0.99);
    // console.log(mom.x+","+mx);
    this.y=lerpDistance(mom.y,this.y,0.99);

    //获取旋转角度
    var deltaX=this.x-mom.x;
    var deltaY=this.y-mom.y;
    var newAngle=Math.atan2(deltaY,deltaX);
    this.angle=lerpAngle(newAngle,this.angle,0.9);

    //尾巴动画
    this.babyTailTimer+=deltaTime;//计时
    if(this.babyTailTimer>50){//时间大于50 下一帧
        this.babyTailCount=(this.babyTailCount+1)%8;
        this.babyTailTimer%=50;
    }

    //眼睛动画
    this.babyEyeTimer+=deltaTime;//计时
    if(this.babyEyeTimer>this.babyEyeInterval){
        this.babyEyeCount=(this.babyEyeCount+1)%2;
        this.babyEyeTimer %= this.babyEyeInterval;
    }
    if(this.babyEyeCount==0){
        this.babyEyeInterval=Math.random()*1500+2000;//【2000,3500】ms
    }
    else{
        this.babyEyeInterval=200;
    }

    //body动画
    this.babyBodyTimer+=deltaTime;//计时
    if()


    ctx1.save();
    ctx1.translate(this.x,this.y);    //图片资源的中心为当前原点
    ctx1.rotate(this.angle);
    //绘制顺序 画tail  body  eye
    ctx1.drawImage(this.babyTail[this.babyTailCount],-this.babyTail[this.babyTailCount].width*0.5+25,-this.babyTail[this.babyTailCount].height*0.5);
    ctx1.drawImage(this.babyBody[0],-this.babyBody[0].width*0.5,-this.babyBody[0].height*0.5);

    var eyeCount=this.babyEyeCount;//临时变量
    ctx1.drawImage(this.babyEye[eyeCount],-this.babyEye[eyeCount].width*0.5,-this.babyEye[eyeCount].height*0.5);//绘制在原点（画布中心400,300）
    ctx1.restore();
};