function uniqueInOrder(iterable) {
    //your code here - remember iterable can be a string or an array
    if (typeof iterable === 'string') {
        iterable = iterable.split('');
    }
    var arr = [];
    var sIdx = 0;
    var slice = [];
    for (var i = 0; i < iterable.length; i++) {
        if (arr.length === 0) {
            arr.push(iterable[0]);
        }
        if (slice.length === 0) {
            slice = [iterable[0]];
        } else {
            slice = iterable.slice(sIdx, i + 1);
        }
        if (slice[0] !== iterable[i]) {
            sIdx = i;
            arr.push(iterable[i]);
        }
    }
    return arr;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']