function interval(start,end){
    if (end-start === 2){
        return [start+1];
    }
    var arr = interval(start,end-1);
    arr.push(end-1);
    return arr;
}

console.log(interval(2,9));