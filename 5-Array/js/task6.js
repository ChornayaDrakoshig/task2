function changeNum(num){
    var arr= num.split('');
    var str=arr[0];
    for (i=1;i<arr.length;i++){
        if (arr[i-1]%2 === 0 && arr[i]%2===0) str+="-";
        str+=arr[i];
    }
    return str;
}

console.log(changeNum('025468'));