function dateDif(str1,str2){
    var date1= new Date(str1);
    var date2= new Date(str2);
    return (date2.getTime()-date1.getTime())/(1000*60*60*24);
}

console.log(dateDif('04/02/2014', '11/04/2014')); 
console.log(dateDif('12/02/2014', '11/04/2014'));