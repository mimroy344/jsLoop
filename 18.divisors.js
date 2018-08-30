// divisors
// var n=144;
// var range=Math.ceil(Math.sqrt(n));
// var divisors='';
// for(i=1;i<=range;i++){
//     if(n%i==0){
//         divisors+=i+' '+(n/i)+' ';
//     }
// }
// console.log(divisors);

// divisor
var n=144;
var range=Math.ceil( Math.sqrt(n));
var divisor = '';
for(i=1;i<=range;i++){
    if(n%i==0){
        if(i==n/i){
            divisor+=i+' ';
        }else{
            divisor+=i+' '+(n/i)+' ';
        }
    }
}
console.log(divisor);
