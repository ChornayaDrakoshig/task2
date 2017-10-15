function swap (str){
    var arr= str.split('');
    for (i=0;i<arr.length;i++){
        if (arr[i].toUpperCase() === arr[i]) arr[i]=arr[i].toLowerCase()
        else arr[i]=arr[i].toUpperCase();
    }
    return arr.join('');
}

console.log(swap('The Quick Brown Fox'));