function sumTwoSmallestNumbers(numbers) {
    //Code here
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers([1,6,3,87,4,10])); //5