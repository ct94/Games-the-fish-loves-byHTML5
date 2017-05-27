/**
 * Created by Administrator on 2017/5/27.
 */
var aneObj=function () {
    this.x=[];//x坐标
    this.len=[];//长度
};
aneObj.prototype.num=50;
aneObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.x[i]=i*20+Math.random()*20;//Math.random()  0~1
        this.len[i]=200+Math.random()*60;
    }
    // console.log("a");
};
// var grd=ctx2.createLinearGradient(0,0,170,0);
aneObj.prototype.draw=function () {
    ctx2.save();
    ctx2.globalAlpha=0.6;//为什么拿出 因为这些固定属性对每个水草都一样
    ctx2.lineWidth=18;
    ctx2.lineCap="round";
    ctx2.strokeStyle="#3b154a";//紫色 在stroke之前
    for(var i=0;i<this.num;i++){
        //begin moveto lineto stroke strokestyle linewigth linecap globalAlpha closepath
        ctx2.beginPath();//海葵绘制在canvas2上
        ctx2.moveTo(this.x[i],canHeight);//绘制起始点 x y
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        ctx2.stroke();//首先告诉笔触颜色 才能用stroke画
        ctx2.closePath();
    }
    ctx2.restore();
};