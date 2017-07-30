/**
 * Created by lipeishang on 17-7-30.
 */
var arr = [1,4,5,2,7];
function quickSort(list){
    if(list.length == 0){
        return [];
    }
    else{
        var lesser = []; //小于基准值的序列
        var greater = []; //大于基准值的序列
        var pivot  = list[0];
        for(var i=1; i<list.length; i++){
            if (list[i] <= pivot){
                lesser.push(list[i]);
            }
            else{
                greater.push(list[i]);
            }
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

console.log(quickSort(arr));

