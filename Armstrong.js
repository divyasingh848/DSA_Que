let N = 153
// Output:True
// Explanation: 13+53+33 = 1 + 125 + 27 = 153

const k = String(N).length;
let num=0;
let originalNum = N;
while(N>0){

    let digit = N%10;
    num += Math.pow(digit, k);
    N=Math.floor(N/10);  
}

if(num === originalNum){
    console.log("It is a palindrome");   
}
else{
    console.log("It is not palindrome");
}


