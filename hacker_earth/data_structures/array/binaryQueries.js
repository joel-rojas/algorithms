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
    const nQArr = inputArr[0].trim().split(' ');
    const n = +nQArr[0];
    const q = +nQArr[1];
    const nArr = inputArr[1].trim().split(' ').map(val => +val);
    let qIdx = 2;
    let qQnt = 0;
    const qArr = [];
    while (qQnt < q) {
        const qData = inputArr[qIdx].trim().split(' ').map(val => +val);
        qArr.push(qData);
        qIdx++;
        qQnt++;
    }
    binaryQueries(n, q, nArr, qArr);
}

function binaryQueries(n, q, nArr, qArr) {
    const newArr = [].concat(nArr);
    const nArrL = nArr.length;
    const qArrL = qArr.length;
    const CHANGE_BIT = 2;
    const SHOW_RES = 3;
    let res = null;
    if (n === nArrL && q === qArrL) {
        for (let qData of qArr) {
            const queryL = qData.length;
            if (queryL === CHANGE_BIT) {
                newArr[qData[1] - 1] ^= 1; 
            } else if (queryL === SHOW_RES) {
                res = newArr[qData[2] - 1];
                let resTxt = 'EVEN';
                if (res === 1) {
                    resTxt = 'ODD';
                } 
                process.stdout.write(resTxt + '\n');
            }
        }
        
    }
}