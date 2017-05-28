/**
 * Created by Administrator on 2017/5/28.
 */
var fruitObj=function () {
    this.alive=[];//bool 是否生存
    this.orange=new Image();
    this.blue=new Image();
    this.large=[];//图片宽高一样
    this.speed=[];//每个果实的速度
    this.x=[];
    this.y=[];
};
fruitObj.prototype.num=30;
fruitObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=true;
        this.x[i]=0;
        this.y[i]=0;
        this.large[i]=0;
        this.speed[i]=Math.random()*0.02+0.01;//[0.01,0.02]
        this.born(i);
    }
    // console.log("fruit");
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
};
fruitObj.prototype.draw=function () {
    for(var i=0;i<this.num;i++) {
        if(this.alive[i]){
            //产生并上漂
            if(this.large[i]<=20){
                this.large[i]+=this.speed[i]*deltaTime;//平均 因为间隔不固定
            }
            //到了此大小，上漂
            else{
                this.y[i]-=this.speed[i]*deltaTime*5;
            }
            ctx2.drawImage(this.orange,this.x[i]-this.orange.width/2,this.y[i]-this.orange.height*0.5,this.large[i],this.large[i]);
            if(this.y[i]<12){
                this.alive[i]=false;
                // console.log("this.alive[i]"+this.alive[i]);
            }
        }
    }
};
fruitObj.prototype.born=function (i) {
    var aneId=Math.floor(Math.random()*ane.num);//向下取整 随机选取位置
    this.x[i]=ane.x[aneId];
    this.y[i]=canHeight-ane.len[aneId];
};

var aliveNum=0;
fruitObj.prototype.numMonitor=function () {
    for(var i=0;i<this.num;i++){
        if(this.alive[i])
            aliveNum++;
        else
            aliveNum--;
    }
};
