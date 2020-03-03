// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const wordL = word.length;
    const aValues = [];
    for (let idx in word) {
        aValues.push(h[alphabet.indexOf(word[idx])]);
    }
    const max = Math.max.apply(null, aValues);
    return max * wordL;
}