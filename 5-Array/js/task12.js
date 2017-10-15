var arr=[1,2,4];
var sum=0, mul=1;

for (i=0;i<arr.length;i++){
    sum+=arr[i];
    mul*=arr[i];
}
console.log("sum = "+sum+", product = "+mul);