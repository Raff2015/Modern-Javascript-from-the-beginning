// Create some Arrays (Both are Arrays)
const numbers = [1,2,3,4,5,6,7];
const numbers2 = new Array(8,9,10,11,12); // Array Constructor
const fruit = ['Apple','Banana','Orange','Blueberries'];
const mixed = [22,'Hello',true, undefined,null,{a:1,b:2},new Date()];

let val;

// console.log(mixed);

// Get array length
val = numbers.length;

// check if it is array
val = Array.isArray(numbers);

// get a single value
val = numbers[2]; //arrays are zero-based

// insert into array
numbers[0] = 100;
// Find index of value
val = numbers.indexOf(2);

// Mutating Arrays
// Push adds to the end of the Array
// numbers.push(8);
// // Add on to front
// numbers.unshift(99);
// // Take off from end
// numbers.pop(); //8 is gone

// // Take from the the front
// numbers.shift(); //99 is gone

// // Splice values
// numbers.splice(1,2); //Takes the 2,3

// // Reverse Array
// numbers.reverse();

// Concatenate Array
val = numbers.concat(numbers2);

// Sorting Arrays A-Z | 0-100
val = fruit.sort();
// val = numbers.sort();

// Use the 'compare function' to sort numbers 
// val = numbers.sort(function(x,y){
//     return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x,y){
//     return y - x;
// });

// Find
function over50(num){
    return num >50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);


