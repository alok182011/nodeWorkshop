let strings = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["apple", 3, true];

// Initial array
let fruits = ["apple", "banana"];

// Add elements to the end
fruits.push("orange"); // ['apple', 'banana', 'orange']

// Remove the last element
const removed1 = fruits.pop(); // 'orange'

// Remove the first element
const removed2 = fruits.shift(); // 'apple'

// Add elements to the beginning
fruits.unshift("grape"); // ['grape', 'banana']

// Return a portion of the array
const subset = fruits.slice(1); // ['banana']

// Add or remove elements at a specified index
fruits.splice(1, 0, "kiwi", "pineapple"); // ['grape', 'kiwi', 'pineapple', 'banana']
