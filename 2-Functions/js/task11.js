function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function findnums(arr){
    arr.sort(compareNumeric);
    console.log(arr[1]+", "+arr[arr.length-2]);
}

console.log([1,2,3,4,5]);
findnums([1,2,3,4,5]);

console.log([8,2,3,6,5]);
findnums([8,2,3,6,5]);