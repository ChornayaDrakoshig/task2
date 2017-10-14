function findType(n){
    return typeof n;
}

console.log(findType([1,2,3]));
console.log(findType(3));
console.log(findType("3"));
console.log(findType(1.23));
console.log(findType(false));