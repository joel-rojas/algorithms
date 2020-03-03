// Complete the repeatedString function below.
function repeatedString(s, n) {
    s = s.split('');
    const countA = (s) => {
        return s.filter(val => val === 'a').length;
    }
    const found = countA(s);
    if (found === 0) {
        return 0;
    }
    const sL = s.length;
    let res = Math.floor(n / sL) * found;
    const remainingA = countA(s.slice(0, n % sL));
    res += remainingA;
    return res;
}