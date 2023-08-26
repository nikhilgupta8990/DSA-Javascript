const uncompress = (str) => {
    const possibleNum = '0123456789';
    let num = '';
    return str.split('').reduce((acc, char) => {
        if (possibleNum.includes(char)) {
            num += char;
        }
        else {
            acc += char.repeat(Number(num))
            num = ''
        }
        return acc;
    }, '')
}
module.exports = uncompress