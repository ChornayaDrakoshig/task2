var arr = [];

function add(){
   var num= document.getElementById("num").value;
   arr.push(num);
    document.getElementById("num").value="";
}
function display(){
    var e="";
    for (i=0;i<arr.length;i++){
        e+="Element "+i+" = "+arr[i]+"<br/>";
    }
    document.getElementById("result").innerHTML = e;
}