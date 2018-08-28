// print infinite loop
var i = 0;
while(true){
    console.log(i);
    i++;
}

// print 1-10
var i= 0;
while(i++<10){
    console.log(i);
}

// print even number between 0-10
var i = 0;
while(i<=10){
    if(i%2==0){
    console.log(i);        
    }
    i++;
}

// print even number between 0-10 by simple way
var i=0;
while(i<=10){
    console.log(i);
    i+=2;
}

// print 0-10 with gap 3
var i = 0;
while(i<10){
    console.log(i);
    i+=3;
}

// print 0-10 by infinite loop
var i = 0;
while(true){
    console.log(i);
    if(10==i){
        break;
    }
    i++;
}
