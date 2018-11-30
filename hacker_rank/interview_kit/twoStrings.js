// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    s1 = [...s1];
    s2 = [...s2];
    /*  ANOTHER ALTERNATIVE SOLUTION USING ES6 SET Object
        const s1S = new Set(s1);
        const s2S = new Set(s2);
        const smallLength = Math.min(s1S.size, s2S.size);
        const checkCommon = (set1, set2) => {
            let hasCommon = false;
            for (let val of set1) {
                if (set2.has(val)) {
                    hasCommon = true;
                    break;
                }
            }
            return hasCommon;
        };
        let hasCommon;
        if (smallLength === s1S.size) {
            hasCommon = checkCommon(s1S, s2S);
        } else {
            hasCommon = checkCommon(s2S, s1S);
        }
        return hasCommon ? 'YES' : 'NO';
    */
    const s1M = new Map();
    const s2M = new Map();
    const createMap = (map, value) => {
        let count = 0;
        if (!map.has(value)) {
            map.set(value, count);
        }
        count = map.get(value) + 1;
        map.set(value, count);
        return map;
    };
    const checkCommon = (map1, map2) => {
        let hasCommon = false;
        for (let [key, value] of map1) {
            if (map2.has(key)) {
                hasCommon = true;
                break;
            }
        }
        return hasCommon;
    };
    s1.reduce(createMap, s1M);
    s2.reduce(createMap, s2M);
    const smallLength = Math.min(s1M.size, s2M.size);
    let hasCommon;
    if (smallLength === s1M.size) {
        hasCommon = checkCommon(s1M, s2M);
    } else {
        hasCommon = checkCommon(s2M, s1M);
    }
    return hasCommon ? 'YES' : 'NO';
}