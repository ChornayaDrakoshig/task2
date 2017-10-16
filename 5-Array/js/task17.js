function shuffleArray(arr){
    for (n=arr.length-1;n>=0;n--){
        
        var index=Math.floor(Math.random()*(n+1));
        var temp=arr[n];
        arr[n]=arr[index];
        arr[index]=temp;
    }
    return arr;
}

var arr=[1,2,3,4,5,6,7,8];
console.log(shuffleArray(arr));