var sum=0;
for (i=3;i<=100;i++){
    if (i%3 === 0 || i%5 === 0) sum+=i;
}
console.log(sum);