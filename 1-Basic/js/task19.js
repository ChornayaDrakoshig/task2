var num = prompt("Write the number", '');
if (num != null){
    if (Math.abs(num-100) <20 || Math.abs(num-400) < 20)  str="Number is near 100 or 400"
    else str="Not in the interval";
    alert(str);
}
