function sortnums(a,b,c){
    var t=0;
    if (b>a) {
        t=a;
        a=b;
        b=t;
    }
    if (c>a){
        t=a;
        a=c;
        c=b;
        b=t;
    }
    else if (c<a && c>b) {
        t=b;
        b=c;
        c=t;
    }
    alert(a+", "+b+", "+c);
}

sortnums(-1,4,0);
sortnums(7,-3,0);
sortnums(-1,1,2);
sortnums(5,4,1);