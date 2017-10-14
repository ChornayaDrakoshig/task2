function reverseNumeric(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
}

function countCoins(cost,coins){
    var arr = new Array();
    coins.sort(reverseNumeric);
    for (i=0;i<coins.length;i++){
        while (cost>=coins[i]){
            arr.push(coins[i]);
            cost-=coins[i];
        }
    }
    return arr;
}

console.log("46 "+countCoins(46,[25,10,5,2,1]));
console.log("46 "+countCoins(46,[50,10,5,20,2,1]));