const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = "";


rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(Number(input[0]));
    for(let i = 1; i <= Number(input[0]); i++){
        answer = answer + '*'.repeat(i) + '\n'
    }
    console.log(answer)

});