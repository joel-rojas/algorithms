function getMiddle(s) {
    //Code goes here!
    var mid = parseInt(s.length / 2);
    if (s.length % 2 == 0) {
        return s[mid - 1] + s[mid];
    }
    return s[mid];
}
console.log(getMiddle('hello')); //'l'
console.log(getMiddle('word')); // 'or'