function isValidWalk(walk) {
    //insert brilliant code here
    var result = true;
    if (walk.length === 10) {
        for (var i = 1; i < walk.length; i++) {
            if (walk[i] === walk[i - 1]) {
                result = false;
                break;
            }
        }
    } else {
        result = false;
    }
    return result;
}
console.log(isValidWalk(['n', 's','n', 's','n', 's','n', 's','n', 's'])); // true;