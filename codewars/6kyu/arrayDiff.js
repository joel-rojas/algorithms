function array_diff(a, b) {
    return a.filter((val) => b.indexOf(val) < 0);
}
console.log(array_diff([1,2,3,4,5,6], [2,4,5,8,9,1])); //[3,6]