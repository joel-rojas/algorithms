// Complete the birthday function below.
function birthday(s, d, m) {
    let sum;
    const sL = s.length - m;
    let count = 0;
    for (let i = 0; i <= sL; i += 1) {
        const subArr = s.slice(i, m);
        sum = subArr.reduce((sum, val) => {
            return sum += val;
        }, 0);
        m += 1;
        if (sum === d) {
            count++;
        }
    }
    return count;
}