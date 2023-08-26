const isPrime = (num, index = Math.floor(Math.sqrt(num))) => {
    if (num === 1) return false;
    if (index === 1) return true;
    if (num % index === 0) return false;
    return isPrime(num, index - 1);
}
module.exports = isPrime