function factorial(n) {
    let result = 1
    for (let i = 1; i <n; i++) {
        result = result * ( i +1 )
    }
    return result
}
console.log(factorial(0))
console.log(factorial(2))
console.log(factorial(1))
console.log(factorial(3))
console.log(factorial(4))

// Big O = O(n) 