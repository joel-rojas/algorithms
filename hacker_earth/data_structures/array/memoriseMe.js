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
    const inputArr = input.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    const n = +(inputArr[0].trim());
    const nArr = inputArr[1].trim().split(' ').map(val => +val);
    const q = +(inputArr[2].trim());
    let i = 0;
    let qIdx = 3;
    const qArr = [];
    const mainData = {};
    while (i < q) {
        const qEl = +(inputArr[qIdx].trim());
        qArr.push(qEl);
        qIdx++;
        i++;
    }
    mainData.n = nArr;
    mainData.q = qArr;
    process.stdout.write(memoriseMe(mainData));
}
function memoriseMe(data) {
    const {n, q} = data;
    const map = new Map();
    n.forEach(element => {
        if (!map.has(element)) {
            map.set(element, 0);
        }
        map.set(element, map.get(element) + 1);
    });
    const res = [];
    q.forEach(element => {
        if (map.has(element)) {
            text = map.get(element);
        } else {
            text = 'NOT PRESENT';
        }
        res.push(text);
    });
    return res.join('\n');
}