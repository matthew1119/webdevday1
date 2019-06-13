const firstName = 'Matyo';
const lastName = 'do';
const age = 20;
const str = 'Well hello there';
const tags = 'Web design, Web Development and Programming';

let val;
// Concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

// Concat
val = firstName.concat(' ', lastName);

// Append
val = 'Matyo';
val += 'Do';

val = 'Konichiwa, watashi-wa ' + firstName + ' des';

// Escaping
val = 'Ohh, Suggoi!! Kimochiii!!';


// Length
val = firstName.length;

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('M');
val = firstName.lastIndexOf('y');

// chartAt()
val = firstName.charAt('3');

// Get last char
val = firstName.charAt(firstName.length - 3);

// substring
val = firstName.substring(2,4);

// slice
val = firstName.slice(-3);
val = firstName.slice(1,5);

// split()
val = str.split(' ');
val = tags.split('');

// replace 
val = str.replace('Matyo','ah');

// includes
val = str.includes('Well');

console.log(val);