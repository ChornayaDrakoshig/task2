function matrix(n){
    var arr=new Array();
    for (i=0;i<n;i++){
        var row= new Array();
        for (j=0;j<n;j++){
            if (i===j) row.push(1)
            else row.push(0);
        }
        arr.push(row);
    }
    return arr;
}

console.log(matrix(3));
console.log(matrix(5));