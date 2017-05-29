/**
 * Created by Administrator on 2017/5/28.
 */
var fruitObj=function () {
    this.alive=[];//bool 是否生存
    this.orange=new Image();
    this.blue=new Image();
    this.large=[];//图片宽高一样
    this.speed=[];//每个果实的速度
    this.fruitType=[];//blue orange
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
        this.speed[i]=Math.random()*0.02+0.003;//[0.01,0.02]
        var rand=Math.random();
        if(rand<0.7){
            this.fruitType[i]="orange";
        }
        else
            this.fruitType[i]="blue";
        this.born(i);
        // console.log(this.fruitType[i]);
    }
    // console.log("fruit");
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
};
fruitObj.prototype.draw=function () {
    for(var i=0;i<this.num;i++) {
        if(this.alive[i]){
            //产生，由小变大
            if(this.large[i]<=20){
                this.large[i]+=this.speed[i]*deltaTime;//平均 因为间隔不固定
            }
            //到了此大小，上漂
            else{
                this.y[i]-=this.speed[i]*deltaTime*5;
            }

            //根据类型判断 并显示图片
            var pic;
            if(this.fruitType[i]=="orange"){
                pic=this.orange;
            }
            else{
                pic=this.blue;
            }
            ctx2.drawImage(pic,this.x[i]-this.orange.width/2,this.y[i]-this.orange.height*0.5,this.large[i],this.large[i]);

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
    this.alive[i]=true;
};

function numMonitor(){
    var aliveNum=0;
    for(var i=0;i<fruit.num;i++){//this or fruit?监视main中的fruit
        if(fruit.alive[i])
            aliveNum++;
    }
    if(aliveNum<15){
        sendFruit();//超过15个则跳出
        return;
    }
}
function sendFruit() {
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){//不存活
            fruit.born(i);//产生
            return;
        }
    }
}
