function binarySearch(arr, num){
    var i=0, j=arr.length-1, m=0;
    while (i<j){
        m=Math.floor((j-i)/2+i);
        if (num<arr[m]) j=m
        else if (num>arr[m]) i=m
        else break;
    }  
    if (arr[m]=num) return m
    else return null;
}

var arr=[1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binarySearch(arr,20));
console.log(binarySearch(arr,6));