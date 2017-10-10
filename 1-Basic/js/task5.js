function rotate() {
var line = document.getElementById('line');
var length = line.innerHTML.length;
    
var counter=setInterval(timer,1000);
    function timer(){  
      var str=line.innerHTML;    
      var newstr=str[length-1]+str.substring(0,length-1);    
      line.innerHTML=newstr;
      }    
}