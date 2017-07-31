/**
 * Created by lipeishang on 17-7-31.
 */
var arr = [2,4,8,1,6,7];
function selectSort(arr){
    const len = arr.length;
 for(let i = 0; i < len;i++){
     let low = i;
     for(let j = i + 1;j < len;j++){
         if(arr[j] < arr[low]){
             low = j;
         }
     }
     if(low != i){
         let t = arr[low];
         arr[low] = arr[i];
         arr[i] = t;
     }
 }
 return arr;
}

console.log(selectSort(arr));