function check(num1, num2){
   return ((num1 == 50 || num2 == 50) || (num1 + num2 == 50)); 
}
alert(check(50, 10));
alert(check(20, 50));
alert(check(24,26));
alert(check(48, 13));