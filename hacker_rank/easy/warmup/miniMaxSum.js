// Complete the miniMaxSum function below.
function getSlice(arr) {
    return arr.slice(0, 4);
}
function sumUp(arr) {
    return arr.reduce((sum, val) => sum += val, 0);
}
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const minArr = getSlice(arr);
    arr.reverse();
    const maxArr = getSlice(arr);
    const max = sumUp(maxArr);
    const min = sumUp(minArr);
    process.stdout.write(min + ' ' + max);
}