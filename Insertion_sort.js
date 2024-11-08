let arr=[4,0,2,9,5,3]

for(let i=1;i< arr.length;i++){
    //current element as arr[i] and index to check sorted array 
    let current = arr[i];
    let j=i-1;

    //outbound and compare
    while(j>=0 && arr[j]>current){
      //shift to right
      arr[j+1] =arr[j];
      j=j-1;
    }
    arr[j+1]= current;
}console.log(arr)