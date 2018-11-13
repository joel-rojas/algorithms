function validatePIN(pin) {
    //return true or false
    return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6);
}
console.log(validatePIN('1234')); // true
console.log(validatePIN('012')); // false
console.log(validatePIN(1234)); // false