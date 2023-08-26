const anagrams = (str1, str2) => {
    const map = {}
    for (let char of str1) {
        if (!map[char]) map[char] = 1;
        else map[char]++
    }
    for (let char of str2) {
        if (char in map) {
            map[char]--;
            if (map[char] < 0) return false;
        }
        else return false;
    }
    return Object.values(map).filter(val => val !== 0).length === 0
}
module.exports = anagrams
