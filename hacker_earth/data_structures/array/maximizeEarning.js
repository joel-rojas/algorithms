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
    const mainData = [];
    while (n--) {
        const aArr = inputArr[aDataIdx].trim().split(' ').map(val => +val);
        const bArr = inputArr[bDataIdx].trim().split(' ').map(val => +val);
        mainData.push({s: aArr[0], r: aArr[1], h: bArr});
        aDataIdx+=2;
        bDataIdx+=2;
    }
    process.stdout.write(maximizeEarnings(mainData) + '\n');
}
function maximizeEarnings(arr) {
    while(arr.length > 0) {
        const value = arr.shift();
        const {s, r, h} = value;
        let count = 0;
        let currentB = h[0];
        count += h.reduce((count, val, idx, arr) => {
            if (arr[idx + 1]) {
                const diff = arr[idx + 1] - currentB;
                if (diff > 0) {
                    currentB = arr[idx + 1];
                    count++;
                }
            }
            return count;
        }, 1);
        return r * count;
    }
}