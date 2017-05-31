/**
 * Created by Administrator on 2017/5/31.
 */
var dataObj=function () {
    this.fruitNum=0;
    this.double=1;
    // this.blueNum=0;
    this.score=0;
    this.gameOver=false;
};
dataObj.prototype.reset=function () {
    this.fruitNum=0;
    this.double=1;
    this.blueNum=0;
    this.score=0;
};
dataObj.prototype.draw=function () {
    var w=can1.width;//内容无宽高  画布有宽高
    var h=can1.height;

    this.score=this.fruitNum;
    ctx1.fillStyle="white";
    ctx1.fillText("score: "+this.score,w*0.5,h-50);//居中  底部向上50px
    // console.log(this.score);
};
// dataObj.prototype.addScore=function () {
//     this.score+=this.fruitNum*100*this.double;
// };
