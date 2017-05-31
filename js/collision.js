/**
 * Created by Administrator on 2017/5/29.
 */
function momFruitCollision(){
    for(var i=0;i<fruit.num;i++){
        // console.log(fruit.num);
        var len=calLength2(fruit.x[i],fruit.y[i],mx,my);
        if(len<400){
            fruit.dead(i);
            data.fruitNum++;
            mom.bigBodyCount++;//吃到果实，计数++
            if(mom.bigBodyCount>7){
                mom.bigBodyCount=7;
            }
            // console.log(mom.bigBodyCount);
            //吃到蓝色果实，double=2;
            if(fruit.fruitType[i]=="blue"){
                data.double=2;
                // data.blueNum++;
            }
        }
    }
}

//mom baby collision
function momBabyCollision() {
    var l=calLength2(mom.x,mom.y,baby.x,baby.y);
    if(l<400){//并且mom吃到果实
        baby.babyBodyCount=0;//小鱼变红
        data.reset();
        mom.bigBodyCount=0;
    }
}