'use strict';

function countFn(scores, condition) {
    let count = 0;
    scores.reduce((curr, val) => {
        const isMax = condition ? val > curr : val < curr;
        if (isMax) {
            curr = val;
            count++;
        }
        return curr;
    }, scores[0]);
    return count;
} 

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    const maxV = countFn(scores, true);
    const minV = countFn(scores, false);

    return [maxV, minV];
}

