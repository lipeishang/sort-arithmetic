/**
 * Created by lipeishang on 17-7-30.
 */
var arr = [1, 4, 5, 2, 7];
function bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));