/**
 * Created by Administrator on 2017/5/29.
 */
var momObj=function () {
    this.x=0;
    this.y=0;
    this.angle;
    this.bigEye=new Image();
    this.bigBody=new Image();
    this.bigTail=new Image();
};
momObj.prototype.init=function () {
    this.x=canWidth/2;//初始在画布中间 400
    this.y=canHeight/2;//300
    this.angle=0;
    this.bigEye.src="./src/bigEye0.png";
    this.bigBody.src="./src/bigSwim0.png";
    this.bigTail.src="./src/bigTail0.png";
};
momObj.prototype.draw=function () {
    this.x=lerpDistance(mx,this.x,0.9);
    this.y=lerpDistance(my,this.y,0.9);

    //获取旋转角度
    var deltaX=this.x-mx;
    var deltaY=this.y-my;
    var newAngle=Math.atan2(deltaY,deltaX);
    this.angle=lerpAngle(newAngle,this.angle,0.9);

    ctx1.save();
    ctx1.translate(this.x,this.y);//改坐标轴原点  为什么移？  因为跟随鼠标，不停改变xy，用translate
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.width*0.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.width*0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.width*0.5-4);
    ctx1.restore();
    // console.log("mom"+":"+this.x+this.y);
};
