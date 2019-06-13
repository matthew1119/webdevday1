// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// Equal to 
if(id ==100){
    console.log('TUMPAK');
} else {
    console.log('LIGWAK');
}

// Not equal
if(id !=100){
    console.log('TUMPAK');
} else {
    console.log('LIGWAK');
}

// Equal to value & type
if(id === 100){
    console.log('TUMPAK');
} else {
    console.log('LIGWAK');
}
// Not equal to value & type
if(id !== 100){
    console.log('TUMPAK');
} else {
    console.log('LIGWAK');
}

// Test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

if(id <= 100){
    console.log('TUMPAK');
} else {
    console.log('LIGWAK');
}

const color = 'yellow';

// IF ELSE 
if(color == 'red'){
    console.log('color is red');
} else if(color == 'blue') {
    console.log('color is blue');
} else  {
    console.log('not red nor blue');
}

// Logical operators
const name = 'Steve';
const age = 15;

// AND &&   
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else{
    console.log(`${name} is an adult`);
}

// OR ||
if(age <= 16 || age >=65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}