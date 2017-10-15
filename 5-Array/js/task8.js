function mostFrequent(arr){
    arr.sort();
    var max=0, max_pos=0;
    for (i=0;i<arr.length;i++){
        var curmax=0;
        var j=i+1;
        while (arr[i]===arr[j]){
            curmax++;
            j++;
        }
        if (curmax>max) {
            max=curmax;
            max_pos=i;
            i=j;
        }
        else i=j-1;
    }
    return arr[max_pos]+" ( "+(max+1)+" times)";
}

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));