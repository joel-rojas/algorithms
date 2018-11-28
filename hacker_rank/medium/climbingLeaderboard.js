// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    const newRank = Array.from(new Set(scores));
    let idx = newRank.length;
    return alice.map(val => {
        while (idx >= 0) {
            if (val >= newRank[idx - 1]) {
                idx--;
            } else {
                break;
            }
        }
        return idx + 1;
    });
    
}