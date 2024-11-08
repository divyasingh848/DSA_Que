const strings = ['abcdbdcbac', 'def', 'acd', 'abc', 'abcdbdcbac', 'def', 'def'];
const frequency = {};

// Iterate through each string in the array
for (let str of strings) {
    // Iterate through each character in the current string
    for (let char of str) {
        // Increment the count for the character
        frequency[char] = (frequency[char] || 0) + 1;
    }
}

// Output the frequency of each character
for (let char in frequency) {
    console.log(`${char}: ${frequency[char]}`);
}
