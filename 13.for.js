// for (initialization; condition; stepping)
// for (var i=0;i<=10;i++){
//     console.log(i);
// }

// print 1-10 between even number using for
// var i= 0;
// for (i=0;i<=10;i+=2){
//     console.log(i);
// }

// print 1-10 between odd number using for
var i =1;
for(i;i<=10;i+=2){
    console.log(i);
}

//print 1-10 by infinite loop
var i=0;
for (;;){
    i++;
    console.log(i);
    
    if(10==i){
        break;
    }
}
