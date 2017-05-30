/**
 * Created by Administrator on 2017/5/29.
 */
function momFruitCollision(){
    for(var i=0;i<fruit.num;i++){
        // console.log(fruit.num);
        var len=calLength2(fruit.x[i],fruit.y[i],mx,my);
        if(len<400){
            fruit.dead(i);
        }
    }

}