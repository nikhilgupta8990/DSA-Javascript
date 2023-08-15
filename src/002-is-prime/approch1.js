const isPrime = (num, index = Math.floor(Math.sqrt(num))) => {
    if (num === 1) return false;
    if (index === 1) return true;
    if (num % index === 0) return false;
    return isPrime(num, index - 1);
}
module.exports = isPrime
// console.log(isPrime(2)); // -> true
// console.log(isPrime(3)); // -> true
// console.log(isPrime(4)); // -> false
// console.log(isPrime(5)); // -> true
// console.log(isPrime(6)); // -> false
// console.log(isPrime(7)); // -> true
// console.log(isPrime(8)); // -> false
// console.log(isPrime(25)); // -> false
// console.log(isPrime(31)); // -> true
// console.log(isPrime(2017)); // -> true
// console.log(isPrime(2048)); // -> false
// console.log(isPrime(1)); // -> false