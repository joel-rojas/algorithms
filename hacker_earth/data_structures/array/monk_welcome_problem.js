process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const inputArr = input.split('\n').filter(data => data.length > 0);
    let n = +(inputArr[0].trim());
    let aDataIdx = 1;
    let bDataIdx = 2;
    const aArr = inputArr[aDataIdx].split(' ').map(val => +val);
    const bArr = inputArr[bDataIdx].split(' ').map(val => +val);
    process.stdout.write(monkWelcomeProblem(n, aArr, bArr) + '\n');
}

function monkWelcomeProblem(n, aArr, bArr) {
    const aArrL = aArr.length;
    const bArrL = bArr.length;
    const newArr = [];
    if (n === aArrL && n === bArrL) {
        for (let i = 0; i < n; i += 1) {
            newArr.push(aArr[i] + bArr[i]);
        }
    }
    return newArr.join(' ');
}