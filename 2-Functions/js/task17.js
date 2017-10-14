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
    console.log(arr);
    return arr.join('');
}

function occurrences(srt){
    var arr=srt.toLowerCase().split('').sort();
    var arr2=unique(srt);
    var answ = new Array();
    for (k=0;k<arr2.length;k++){
        answ.push([arr2[k],0]);
    }
    console.log(answ);
    console.log(answ[0][1]);
    var j=1;
    var k=0;
    console.log(arr.length);
    for (i=0;i<arr.length;i++){
        console.log(i+" "+j+" "+k)
        while (arr[i] == arr[i+j] && i+j<arr.length){
            j++;
        }
        
        answ[k][1]=j;
        console.log(answ[k]);
        i+=j-1;
        j=1;
        k++;
    }
    return answ;
}

//console.log(occurrences( "thequickbrownfoxjumpsoverthelazydog"));
console.log(occurrences( "brownfoxjumplazydog"));
//console.log(occurrences('aaaaaaaabbaa'));