function first (arr,num=0){
    var answ =[];
    if (num == 0){
        return arr[0];
    }
    else if (num<0 || arr.length === 0) return answ
    else {for (i=0;i<num;i++){
        if (i<arr.length) answ.push(arr[i])
        else break;
        }
     return answ;
    }
    
}

console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));