function fizzbuzz(array) {
    let res = []
    array.forEach(ele => {
        if (ele % 3 == 0 ^ ele % 5 == 0) {
            res.push(ele);
        }
    });
    return res
}

console.log(fizzbuzz([1,3,4,5,6,7,15,30]));


function isPrime(number) {
    if (number < 2) return false
    for (let i = 2; i < number ; i++) {
        if (number % i == 0) return false;
    }
    return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(11));

function sumOfNPrimes(n) {
    if (n <= 0) return 0;
    let sum = 0;
    let number = 2; 
    while (n > 0) {
        if (isPrime(number)) {
            sum += number;
            n--;   
        }
        number++; 
    }
    return sum;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(2));
console.log(sumOfNPrimes(3));
console.log(sumOfNPrimes(5));
console.log(sumOfNPrimes(10));

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
let sum = primes.reduce((sum, current) => sum + current, 0);
console.log(sum);


