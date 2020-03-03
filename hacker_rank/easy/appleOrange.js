function getCount(treeP, range, arr) {
    let count = 0;
    const { s, t } = range;
    arr.forEach(val => {
        const sum = treeP + val;
        if (sum >= s && sum <= t) {
            count++;
        }
    });
    return count;
}

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const countA = getCount(a, { s, t }, apples);
    const countO = getCount(b, { s, t }, oranges);
    process.stdout.write(countA + '\n' + countO);
}