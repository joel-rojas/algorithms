// Complete the permutationEquation function below.
function permutationEquation(p) {
    return p.map((val, idx, arr) => {
        /**
         * This is another approach without incrementing the idx value
         * const currentIdx = arr.indexOf(val);
            const found = arr.indexOf(currentIdx + 1);
            return arr[arr.indexOf(arr.indexOf(found + 1) + 1)];
         */
        const currentIdx = arr.indexOf(idx + 1);
        const foundIdxNumber = arr.indexOf(currentIdx + 1);
        const foundNumber = arr.indexOf(foundIdxNumber + 1);
        return arr[foundNumber];
    });
}