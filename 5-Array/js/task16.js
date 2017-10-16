function leapYears(start,finish){
    var arr=[];
    for (i=start;i<=finish;i++){
        if ((i%4 ===0 && i%100 !==0) || (i%400===0)) arr.push(i);
    }
    return arr;
}

console.log(leapYears(1990,2017));
console.log(leapYears(1890,1910));