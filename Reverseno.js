let N = 12345;

let reverse= 0
// Output:54321

while(N>0){
    //found last digit, replace/shift with remainder, remove last didgit repeat.
    let remainder = N % 10;
    reverse = reverse*10 +remainder;
    N = Math.floor(N/10)
   
}  console.log(reverse)