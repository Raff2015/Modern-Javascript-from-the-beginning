const firstName = 'Edgar';
const lastName = 'Chicas';
const age = 30;
const str = 'Hello there my name is Edgar';
const tags =  'web design, web development, web programming';


let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Benny ';
val += 'Benedo';

val = 'Hello, my name is: ' + firstName + ' and I am ' + age + ' years old.';

// Escaping
val = 'That\s awesome, I can\'t wait!';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ',lastName);

// Change Case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

// val = firstName[2];

val = firstName.indexOf('e');


// charAt()
val = firstName.charAt('0');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 5);

// slice()
val = firstName.slice(0,5);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Edgar', 'Rafael');

// includes()
val = str.includes('Hello');

console.log(val);