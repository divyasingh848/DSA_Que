//It push the max value by swap, O(n2)
let arr = [13,46,24,52,20,9];

for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
             var temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
        }
   
    } 
  
    
}  console.log(arr);

