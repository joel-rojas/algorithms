function scramble(str1, str2) {
    //code me
    const str1Map = new Map();
    const str2Map = new Map();
    const saveMapValues = (str, map) => {
        const strL = str.length;
        for (let i = 0; i < strL; i += 1) {
            if (!map.has(str[i])) {
                map.set(str[i], 0);
            }
            map.set(str[i], map.get(str[i]) + 1);
        }
    };

    saveMapValues(str1, str1Map);
    saveMapValues(str2, str2Map);

    let isMatch = false;
    for (let [key, value] of str2Map) {
        if (str1Map.has(key) && str1Map.get(key) >= str2Map.get(key)) {
            isMatch = true;
        } else {
            isMatch = false;
            break;
        }
    }
    return isMatch;
}

console.log(scramble('fkwjtobrbvtlodr', 'world')); //true
console.log(scramble('vajaptcri', 'javascript')); //false