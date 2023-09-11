const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let num = input[0];
    arr = input[1].split(' ').map((el) => parseInt(el));
    solution(num, arr);
  process.exit();
});