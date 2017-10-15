function is_array(n){
    return (typeof n === 'object')
}

console.log(is_array([1,2,4,0]));
console.log(is_array('resource'));