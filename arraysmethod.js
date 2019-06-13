// Create some arrays
const numbers = [43,45,56,34,44,5];
const numbers2 = new Array(22,34,54,76,65);
const fruit = ['Apple pen','Pinapple pen','Uhh','Pepanapoapopen'];
const mixed = [22,'Konichiwa',true,undefined,null,{a:1, b:2},new Date()];

let val;

// // Get array length
// val = numbers.length;
// // Check if its array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(34);

// // MUTATING ARRAYS 
//     // ADD ON TO END
//     numbers.push(250);
//     // ADD ON TO FRONT
//     numbers.unshift(120);
//     // TAKE OFF FROM END
//     numbers.pop();
//     // TAKE OFF FROM FRONT
//     numbers.shift();
//     // Splice values
//     numbers.splice(1,3);
//     // Reverse
//     numbers.reverse();
//     // Concatenate array
//     val = numbers.concat(numbers2);

//     // Sorting arrays
//     val = fruit.sort();
//     val = numbers.sort();

    // Use the "compare function"
    val = numbers.sort(function(x, y){
        return x - y;
    });

    // Reverse sort
    val = numbers.sort(function(x, y){
        return y - x;
    });

    // Find
    function over50(num){
        return num < 40;
    }

    val = numbers.find(over50);

console.log(val);