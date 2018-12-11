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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    let count = 0;
    let fM = createMap(s1, new Map());
    let sM = createMap(s2, new Map());

    if (sM.size <= fM.size) {
        const aux = fM;
        fM = sM;
        sM = aux;
    }
    const opFn = (map) => {
        return (val, key) => {
            if (map.has(key)) {
                const diff = val - map.get(key);
                count += (diff < 0 ? 0 : diff);
            } else {
                count += val;
            }
        };
    };
    fM.forEach(opFn(sM));
    sM.forEach(opFn(fM));
    return count;
}