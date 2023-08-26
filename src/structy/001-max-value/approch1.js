const maxValue1 = (arr) => {
    return arr.reduce((maxVal, curr) => {
        return maxVal < curr ? curr : maxVal
    }, -Infinity)
}
module.exports = maxValue1