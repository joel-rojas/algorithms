function result(opObj, value) {
    var mapObj = {
        'plus': value + opObj.value,
        'minus': value - opObj.value,
        'times': value * opObj.value,
        'dividedBy': Math.floor(value / opObj.value)
    };
    return mapObj[opObj.op];
}

function processNumber(currentVal, opObj) {
    if (opObj) {
        return result(opObj, currentVal);
    }
    return currentVal;
}

function zero() {
    return processNumber(0, arguments[0]);
}

function one() {
    return processNumber(1, arguments[0]);
}

function two() {
    return processNumber(2, arguments[0]);
}

function three() {
    return processNumber(3, arguments[0]);
}

function four() {
    return processNumber(4, arguments[0]);
}

function five() {
    return processNumber(5, arguments[0]);
}

function six() {
    return processNumber(6, arguments[0]);
}

function seven() {
    return processNumber(7, arguments[0]);
}

function eight() {
    return processNumber(8, arguments[0]);
}

function nine() {
    return processNumber(9, arguments[0]);
}

function plus() {
    return {
        op: 'plus',
        value: arguments[0]
    };
}

function minus() {
    return {
        op: 'minus',
        value: arguments[0]
    };
}

function times() {
    return {
        op: 'times',
        value: arguments[0]
    };
}

function dividedBy() {
    return {
        op: 'dividedBy',
        value: arguments[0]
    };
}

console.log(two(times(three()))); //6