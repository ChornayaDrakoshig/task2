for (i=100;i<1000;i++){
    var sum = 0;
    var digits = i.toString().split('');
    for (j=0;j<digits.length;j++){
        sum+= Math.pow(digits[j],3);
    }
    if (sum === i) console.log(i);
}