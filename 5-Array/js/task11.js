function count (arr){
    var sum=0;
    for (i=0;i<arr.length;i++){
        sum+=Math.pow(arr[i],2);
    }
    return sum;
}

var arr= [1,2,3,4,5];
console.log(count(arr));