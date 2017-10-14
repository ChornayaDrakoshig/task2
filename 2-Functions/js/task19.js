function largerThan(arr,num){
    var answ = new Array();
    for (i=0;i<arr.length;i++){
        if (arr[i]>num) answ.push(arr[i]);
    }
    return answ;
}

var arr=[2,13,19,4,5,30,7,17,6];
console.log(largerThan(arr,5));
console.log(largerThan(arr,10));
console.log(largerThan(arr,2));