var str = "";
var answ = prompt("Celsius [C] or Fahrenheit [F]?", '');
if (answ != null){
    var num = prompt("Enter the temperature" , '');
    if (answ == "C" || answ == "c") {
        var num2=32+9*num/5;
        str= ""+num+" °C is "+num2+"°F";
    } 
    else if (answ == "F" || answ == "f") {
        var num2=5*(num-32)/9;
        str= ""+num+" °F is "+num2+"°C";
    }
    alert(str);
}
