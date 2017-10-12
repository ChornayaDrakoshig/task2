var str = prompt("Write the string", '');
var str2=str;
if (str.length>9){
  if (str.substr(4,6) === "Script")  {
      str2=str.substring(0,4);
      str2+=str.substring(10,str.length);
  }
}
alert(str2);

