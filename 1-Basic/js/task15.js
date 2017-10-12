var answ = prompt("Write the number", '');
if (answ != null){
    if (answ > 13) {
        alert((answ-13)*2);
    } 
    else {
        alert(13-answ);
    }
}
