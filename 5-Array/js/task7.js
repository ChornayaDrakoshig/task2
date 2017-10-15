function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function sortArr(arr){
    return arr.sort(compareNumeric);
}

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(sortArr(arr1));