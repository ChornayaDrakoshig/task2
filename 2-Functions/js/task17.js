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

function occurrences(srt){
    var arr=srt.toLowerCase().split('').sort();
    var arr2=unique(srt);
    var answ = new Array();
    for (k=0;k<arr2.length;k++){
        answ.push([arr2[k],0]);
    }
    var j=1, k=0;
    for (i=0;i<arr.length;i++){
        while (arr[i] == arr[i+j] && i+j<arr.length){
            j++;
        }
        answ[k][1]=j;
        i+=j-1;
        j=1;
        k++;
    }
    return answ;
}

console.log(occurrences( "thequickbrownfoxjumpsoverthelazydog"));
console.log(occurrences('aaaaaaaabbaac'));