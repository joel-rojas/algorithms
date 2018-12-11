function createMap(arr, map) {
    arr.reduce((map, val) => {
        if (!map.has(val)) {
            map.set(val, 0);
        }
        map.set(val, map.get(val) + 1);
        return map;
    }, map);
    return map;
}

function sumUp(fS, sS) {
    let count = 0;
    let fM = createMap(fS, new Map());
    let sM = createMap(sS, new Map());

    if (sM.size <= fM.size) {
        const aux = fM;
        fM = sM;
        sM = aux;
    }
    fM.forEach((val, key) => {
        if (sM.has(key)) {
            const diff = val - sM.get(key);
            count += (diff < 0 ? 0 : diff);
        } else {
            count += val;
        }
    });
    return count;
}

// Complete the anagram function below.
function anagram(s) {
    const sL = s.length;
    if ((sL & 1) === 0) {
        const mid = sL / 2;
        let firstSlice = s.slice(0, mid).split('');
        let secondSlice = s.slice(mid).split('');
        return sumUp(firstSlice, secondSlice);
    }
    return -1;

}