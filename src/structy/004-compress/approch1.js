const compress = (str) => {
    let prev = '', repeatCount = 0, result = '';
    for (let index = 0; index <= str.length; index++) {
        const element = str[index];
        if (prev === element) {
            repeatCount++;
        }
        else {
            if (prev !== '')
                result += repeatCount === 1 ? prev : repeatCount + prev;
            prev = element;
            repeatCount = 1;
        }
    }
    return result;
}
module.exports = compress;