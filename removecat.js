const name = 'John';
const age = 36;
const job = 'Web Developer';
const city = 'Manila';

let html;

// W/O template string (es5)
// html = '<ul><li>Name: ' + 
//         name + 
//         '</li><li>Age: ' +
//         age + 
//         '</li><li>Job: ' +
//         job + 
//         '</li><li>City: ' +
//         city + 
//         '</li></ul>';

function hello() {
    return 'Konichiwa Mina-san';
}
// With template string (es6)
html = `
    <ul>
        <li>Name:${name} </li>
        <li>Age:${age} </li>
        <li>Job:${job} </li>
        <li>City:${city} </li>
        <li>${hello()}</li>
        <li>${age > 36 ? 'Oops oops sobra na' : 'Oks yan'}</li>


    </ul>
`;

        document.body.innerHTML = html;