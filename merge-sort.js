/**
 * Created by lipeishang on 17-7-31.
 */
var arr = [5, 1, 7, 4, 2];
var first = 0;
var last = arr.length;
function mergeSort(arr) {
    function sort(arr, first, last) {
        first = (first === undefined) ? 0 : first;
        last = (last === undefined) ? 0 : last;
        if (last - first < 1) {
            return;
        }
        var middle = Math.floor((first + last) / 2);
        sort(arr, first, middle);
        sort(arr, middle + 1, last);
        var f = first;
        var m = middle;
        var i, temp;
        while (f <= m && m + 1 <= last) {
            if (arr[f] >= arr[m + 1]) {
                temp = arr[m + 1];
                for (i = m; i >= f; i--) {
                    arr[i + 1] = arr[i];
                }
                arr[f] = temp;
                m++;
            }
            else {
                f++;
            }
        }
        return arr;
    }

    return sort(arr,first,last);
}

console.log(mergeSort(arr));

