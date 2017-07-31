var arr = [1, 7, 2, 5, 4, 9];
function quicksort(arr) {
    function swap(arr, m, n) {
        var tmp = arr[m];
        arr[m] = arr[n];
        arr[n] = tmp;
    }

    function partition(arr, low, high) {
        var x = arr[high];
        var i = low - 1;
        for (var j = low; j < high; j++) {
            if (arr[j] <= x) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }

    function sort(arr, low, high) {
        if (low < high) {
            var pivotIndex = partition(arr, low, high);
            sort(arr, low, pivotIndex - 1);
            sort(arr, pivotIndex + 1, high);
        }
        return arr;
    }

    return sort(arr, 0, arr.length - 1);
}

console.log(quicksort(arr));

