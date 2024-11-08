///It select smallest no and then swap and will be using one variable to track minimum index value
//complexity O(n2)
var arr= [13,46,24,52,20,9]
// Output: 9,13,20,24,46,52

for(let i=0;i<arr.length;i++){
    var minIndex = i;
    // The inner loop should start from i + 1 instead of 1. This ensures that it only checks the elements after the current element i, which is necessary for selection sort.
    for(let j=i+1; j<arr.length; j++){
        if(arr[j]< arr[minIndex]){
            minIndex=j;

        }  
    }
    if(minIndex !== i){
        arr[i] = arr[i]+arr[minIndex];
        arr[minIndex]=arr[i]-arr[minIndex];
        arr[i] =arr[i]-arr[minIndex];

        // let temp = arr[i];
        // arr[i]=arr[minIndex];
        // arr[minIndex]=temp
    }
      
} console.log(arr);
