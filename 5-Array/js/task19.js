function sumArrays(arr1,arr2){
    var n= arr1.length>arr2.length ? arr1.length : arr2.length;
    var arr=[];
    for (i=0;i<n;i++){
        var sum=0;
        if (i<arr1.length) sum+=arr1[i];
        if (i<arr2.length) sum+=arr2[i];
        arr.push(sum);
    }
    return arr;
}

array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
console.log(sumArrays(array1,array2));