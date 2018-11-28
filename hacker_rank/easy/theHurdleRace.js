// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    const maxVal = Math.max.apply(null, height);
    const diff = maxVal - k;
    return diff > 0 ? diff : 0;
}