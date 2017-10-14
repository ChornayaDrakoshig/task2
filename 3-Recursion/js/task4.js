function arrSum(arr){
    if (arr.length ===1) return arr[0]
    else{
        var last=arr.pop();    
        return last+arrSum(arr);
    }
}

console.log(arrSum([1, 2, 3, 4, 5, 6]));
console.log(arrSum([6]));