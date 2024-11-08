let num = 1234
let count=0;
// if(num==0){
// count=1;
// }
// else{
    while(num>0){
     num = Math.floor(num/10);
    count++;
}
// }
console.log(count)


// Using Built in
// let num = 1234;
// let count = num.toString().length;

// console.log(count);