function compareStringLength(a, b) {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
}

function longestWord(str){
    var arr=str.split(' ').sort(compareStringLength);
    return arr[arr.length-1];
}

console.log(longestWord("Web Development Tutorial"));