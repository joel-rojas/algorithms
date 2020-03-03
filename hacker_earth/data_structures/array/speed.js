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
    const inputArr = input.split('\n').filter(val => val.length > 0);
    let tCases = +(inputArr[0].trim());
    let nIdx = 1;
    let sIdx = 2;
    const dataArr = [];
    while(tCases--) {
        const n = +(inputArr[nIdx].trim());
        const sMax = inputArr[sIdx].trim().split(' ').map(val => +val);
        dataArr.push({
            n,
            sMax
        });
        nIdx += 2;
        sIdx += 2;
    }
    speed(dataArr);
}

function speed(data) {
    while(data.length > 0) {
        const el = data.shift();
        const sMaxL = el.sMax.length;
        if (el.n === sMaxL) {
            let count = 1;
            let max = el.sMax[0];
            for (let idx = 0; idx < el.n - 1; idx += 1) {
                if (max > el.sMax[idx + 1]) {
                    count++;
                    max = el.sMax[idx + 1];
                }
            }
            process.stdout.write(count + '\n');
        }
    }
}