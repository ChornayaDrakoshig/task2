function unique(srt){
    var arr=srt.toLowerCase().split('').sort();
    console.log(arr);
    var i=0, j=0;
    while (i<arr.length){
        while (arr[i] == arr[i+j+1]){
            j++;
        }
        if (j>0) arr.splice(i+1, j+1);
        j=0;
        i++;
    }
    return arr.join('');
}

console.log(unique( "thequickbrownfoxjumpsoverthelazydog"));
console.log(unique('aaaaaaaabbaa'));