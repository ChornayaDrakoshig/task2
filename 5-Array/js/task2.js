function cloneArr(arr) {
 return arr.slice(0);
    };
console.log(cloneArr([1, 2, 4, 0]));
console.log(cloneArr([1, 2, [4, 0]]));