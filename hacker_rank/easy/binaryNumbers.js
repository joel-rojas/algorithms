'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
    const binary = n.toString(2);
    let max = 0;
    const bLength = binary.length;
    let idx = 0;
    let isChanged = false;
    const binaryArr = binary.split('');
    for (let i = 0; i < bLength; i += 1) {
        if (binary[i] === '1') {
            if (isChanged) { idx = i; }
            max =  Math.max(max, binaryArr.slice(idx, i + 1).length);
            isChanged = false;
        } else {
            isChanged = true;
        }
    }
    process.stdout.write(max + '\n');
}
