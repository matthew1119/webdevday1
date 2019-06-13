let val;

const today = new Date();
let birthDate = new Date('5-13-1983 11:25:00');
birthday = new Date('May 13 1983');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthDate.setMonth(2);
birthDate.setDate(12);
birthDate.setFullYear(1983);
birthDate.setHours(3);
birthDate.setMinutes(30);
birthDate.setSeconds(30);

console.log(birthDate);