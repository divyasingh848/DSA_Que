var arr= [10,5,10,15,10,5];
// Output: 10  3
// 	 5  2
//         15  1

var frequency = {};

for(let n of arr){
    frequency[n] = (frequency[n] || 0)+1;
    // console.log(frequency[n],frequency);
    
}

for(let count in frequency ){
    if(frequency[count] > 2){
        console.log(count,frequency[count]);
        
    }
}