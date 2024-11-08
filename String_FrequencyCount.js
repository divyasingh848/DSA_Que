const str = 'abcdbdcbac';
const frequency = {};

// Iterate through each character in the string
for (let char of str) {
    // Increment the count for the character
    frequency[char] = (frequency[char] || 0) + 1;
}

// Output the frequency of each character
for (let char in frequency) {
    console.log(char,frequency[char]);
}
