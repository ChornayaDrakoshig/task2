function countArea() {
var answerWrapper = document.getElementById('area');
var a=5, b=6, c=7;
p=(a+b+c)/2;
area=Math.sqrt(p*(p-a)*(p-b)*(p-c)); 
answerWrapper.innerHTML = area;
}