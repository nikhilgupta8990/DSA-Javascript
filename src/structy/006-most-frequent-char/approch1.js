const mostFrequentChar = (str) => {
    const map = {};
    let maxCount = 0;
    for (let char of str) {
        if (!map[char]) map[char] = 1;
        else {
            map[char]++;
            maxCount = maxCount < map[char] ? map[char] : maxCount;
        }
    }
    for (let char of str) {
        if (map[char] === maxCount) return char;
    }
    return false;
}
module.exports = mostFrequentChar
console.log(mostFrequentChar('bookeeper')); // -> 'e'
console.log(mostFrequentChar('david')); // -> 'd'
console.log(mostFrequentChar('abby')); // -> 'b'
console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('potato')); // -> 'o'
console.log(mostFrequentChar('eleventennine')); // -> 'e'
console.log(mostFrequentChar("riverbed")); // -> 'r'