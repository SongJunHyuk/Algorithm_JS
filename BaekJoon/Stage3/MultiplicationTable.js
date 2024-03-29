function solution(num) {
    for(let i = 1; i<10; i++) {
        console.log(`${num} * ${i} = ${num*i}`)
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;
rl.on('line', function(line) {
    input = parseInt(line);

    rl.close();
}).on("close", function() {
    solution(input);
    process.exit();
});