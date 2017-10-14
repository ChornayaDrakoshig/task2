function sortsymbols(str){
    return str.toLowerCase().split('').sort().join('');
}

console.log(sortsymbols("WHATishappeningRIghTnOW"));