function unique(srt){
    var arr=srt.toLowerCase().split('').sort();
    var i=0, j=0;
    while (i<arr.length){
        while (arr[i] == arr[i+j+1]){
            j++;
        }
        if (j>0) arr.splice(i+1, j);
        j=0;
        i++;
    }
    return arr.join('');
}

console.log(unique( "thequickbrownfoxjumpsoverthelazydog"));
console.log(unique('aaaaaaaabbaac'));