function multiply(){
   var num1= document.getElementById("firstnum").value;
   var num2= document.getElementById("secondnum").value;
   var num3= num1*num2;
var wrapper=     document.getElementById("answer");
    wrapper.innerHTML=num3;
}
function divide(){
    var num1= document.getElementById("firstnum").value;
   var num2= document.getElementById("secondnum").value;
   var num3= num1/num2;
var wrapper= document.getElementById("answer");
    wrapper.innerHTML=num3;
}