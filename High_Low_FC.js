var arr = [10, 5, 10, 15, 10, 5, 15];
var frequency = {};

// Count the frequency of each number
for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
}

let lowFrequencyEle = null;
let highFrequencyEle = null;
let lowFrequency = Infinity;
let highFrequency = 0;

// Iterate through the frequency object
for (let num in frequency) {
    const count = frequency[num];

    // Check for the highest frequency
    if (count > highFrequency) {
        highFrequency = count;
        highFrequencyEle = num; // Store the element with the highest frequency
    }

    // Check for the lowest frequency
    if (count < lowFrequency) {
        lowFrequency = count;
        lowFrequencyEle = num; // Store the element with the lowest frequency
    }
}

// Output the results
console.log(`Element with highest frequency: ${highFrequencyEle} (Frequency: ${highFrequency})`);
console.log(`Element with lowest frequency: ${lowFrequencyEle} (Frequency: ${lowFrequency})`);
