// Problem: Given an integer 'n', find the factorial of that integer.
// The factorial of a non-negative integer 'n', denoted m!, is the product of all positive integers <= to 'n'.
// Factorial of 0 and 1 is === 1.

function factorial(n) {
    let result = 1
    for(let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(5))
console.log(factorial(10))
console.log(factorial(20))

// Big O === O(n)