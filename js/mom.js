/**
 * Created by Administrator on 2017/5/29.
 */
var momObj=function () {
    this.x=0;
    this.y=0;
    this.angle;
    this.bigEye=[];
    this.bigBodyOra=[];
    this.bigBodyBlue=[];
    this.bigTail=[];

    this.momTailTimer=0;
    this.momTailCount=0;

    this.bigEyeTimer=0;
    this.bigEyeCount=0;
    this.bigEyeInterval=1000;

    this.bigBodyCount=0;
};
momObj.prototype.init=function () {
    this.x=canWidth/2;//初始在画布中间 400
    this.y=canHeight/2;//300
    this.angle=0;

    //身体
    for(var i=0;i<8;i++){
        this.bigBodyOra[i]=new Image();
        this.bigBodyBlue[i]=new Image();
        this.bigBodyOra[i].src="./src/bigSwim"+i+".png";
        this.bigBodyBlue[i].src="./src/bigSwimBlue"+i+".png";
    }
    //尾巴
    for(i=0;i<8;i++){
        this.bigTail[i]=new Image();
        this.bigTail[i].src="./src/bigTail"+i+".png";
    }

    //眼睛序列初始化
    for(i=0;i<2;i++){
        this.bigEye[i]=new Image();
        this.bigEye[i].src="./src/bigEye"+i+".png";
    }
};
momObj.prototype.draw=function () {
    this.x=lerpDistance(mx,this.x,0.88);
    this.y=lerpDistance(my,this.y,0.88);

    //获取旋转角度
    var deltaX=this.x-mx;
    var deltaY=this.y-my;
    var newAngle=Math.atan2(deltaY,deltaX);
    this.angle=lerpAngle(newAngle,this.angle,0.85);

    //尾巴动画
    this.momTailTimer+=deltaTime;//计时
    if(this.momTailTimer>50){//时间大于50 下一帧
        this.momTailCount=(this.momTailCount+1)%8;
        this.momTailTimer%=50;
    }

    //眼睛动画
    this.bigEyeTimer+=deltaTime;//计时
    if(this.bigEyeTimer>this.bigEyeInterval){
        this.bigEyeCount=(this.bigEyeCount+1)%2;
        this.bigEyeTimer %= this.bigEyeInterval;
    }
    if(this.bigEyeCount==0){
        this.bigEyeInterval=Math.random()*1400+1900;//【2000,3500】ms
    }
    else{
        this.bigEyeInterval=200;
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);//改坐标轴原点  为什么移？  因为跟随鼠标，不停改变xy，用translate
    ctx1.rotate(this.angle);

    var tailCount=this.momTailCount;
    ctx1.drawImage(this.bigTail[tailCount],-this.bigTail[tailCount].width*0.5+29,-this.bigTail[tailCount].height*0.5-2);

    var mombodyCount=this.bigBodyCount;
    if(data.double==1){
        ctx1.drawImage(this.bigBodyOra[mombodyCount],-this.bigBodyOra[mombodyCount].width*0.5,-this.bigBodyOra[mombodyCount].height*0.5);
        // console.log(bodyCount);
    }
    else {
        ctx1.drawImage(this.bigBodyBlue[mombodyCount],-this.bigBodyBlue[mombodyCount].width*0.5,-this.bigBodyBlue[mombodyCount].height*0.5);
    }

    var eyeCount=this.bigEyeCount;
    ctx1.drawImage(this.bigEye[eyeCount],-this.bigEye[eyeCount].width*0.5,-this.bigEye[eyeCount].height*0.5);
    ctx1.restore();
    // console.log("mom"+":"+this.x+this.y);
};
