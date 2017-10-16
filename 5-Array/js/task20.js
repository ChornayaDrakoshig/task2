function findDuplicates(arr){
    var dupl = {};
    var answ=[];
    for (i=1;i<arr.length;i++){
        for (j=0;j<i;j++){
            if (arr[i]===arr[j]){
                dupl[arr[i]]=0;
            }
        }
    }
    for (i in dupl){
        answ.push(i);
    }
    return answ;
}

var arr=[1, 2, 2, 2, 5, 4, 7, 8, 4, 7, 7, 71, 3, 6];
console.log(findDuplicates(arr));