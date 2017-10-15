function last (arr,num=0){
    var answ =[];
    if (num == 0){
        return arr[arr.length-1];
    }
    else if (num<0 || arr.length === 0) return answ
    else if (num>arr.length) return arr
    else {
        for (i=arr.length-num;i<arr.length;i++){
            answ.push(arr[i])
        }
     return answ;
    }
    
}

console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));