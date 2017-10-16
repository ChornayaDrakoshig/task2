var arr = ['a','222','A','ssa','sSa','asdsaad','gggg','gggg','gggg','gggg','v'];

arr[0]=arr[0].toLowerCase();
for(i = 1; i<arr.length; i++){
    arr[i]=arr[i].toLowerCase();
    for(j=0;j<i;j++){
        if(arr[i]=== arr[j]){
            // delete i
            arr.splice(i, 1);
            i--;
            break;
        }
    }
}

console.log(arr);