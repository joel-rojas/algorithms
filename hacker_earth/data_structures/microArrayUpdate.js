// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});
// Write your code here
function main(input) {
    try {
        const inputArr = input.split('\n').filter(data => data.length > 0);
        if (inputArr.length > 0) {
            let testCase = +(inputArr[0].trim());
            const arr = [];
            let nKData = 1;
            let arrData = 2;
            while (testCase--) {
                let nK = inputArr[nKData].trim();
                nK = nK.split(' ');
                let n = +nK[0];
                let K = +nK[1];
                let array = inputArr[arrData].trim();
                array = array.split(' ').map(val => +val);
                arr.push({
                    n,
                    K,
                    array
                });
                nKData += 2;
                arrData += 2;
            }
            microArrayUpdate(arr);
        }
    } catch (e) {
        console.log('error', e);
    }
}

function microArrayUpdate(data) {
    while(data.length) {
        const {n, K, array} = data.shift();
        const arrL = array.length;
        if (n === arrL) {
            const lessValuesArr = array.filter(val => val < K);
            if (lessValuesArr.length === 0) {
                process.stdout.write('0\n');
            } else {
                lessValuesArr.sort((a, b) => a - b);
                const count = K - lessValuesArr[0];
                process.stdout.write(count + '\n');
            }
        }
    }
}