function binarySearch(arr,num){
    var i=0, j=arr.length, m=0;
    m=Math.floor((j-i)/2);
    while (j>i && arr[m]!=num){
        if (num<arr[m]){
            j=m;
            m=Math.floor((j-i)/2)+i;
        }
        else if (num>arr[m]){
            i=m;
            m=Math.floor((j-i)/2)+i;
        }
    }
    if (arr[m]===num) return m
        else return m;
}

var arr=[1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(arr,5));