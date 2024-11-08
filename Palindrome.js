let N = 4554
// Output:Palindrome Number
let reverse = 0;
while(N>0){
  let rem = N%10;
  reverse = reverse*10 + rem;
  N = Math.floor(N/10)
 
}
if(reverse== N){
    console.log("palindrome")
  }


//   Two pointer method
// let N = 4554;

// Convert the number to a string
// let str = N.toString();
// let left = 0;
// let right = str.length - 1;
// let isPalindrome = true;

// Use two pointers to compare characters
// while (left < right) {
//     if (str[left] !== str[right]) {
//         isPalindrome = false; // If characters do not match, it's not a palindrome
//         break; // Exit the loop
//     }
//     left++;
//     right--;
// }

// Output the result
// if (isPalindrome) {
//     console.log("Palindrome Number");
// } else {
//     console.log("Not a Palindrome Number");
// }
