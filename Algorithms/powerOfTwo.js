function isPowerOfTwo(n) {
    if (n < 1) {
      return false
    }
    while (n > 1) {
      if (n % 2 !== 0) {
        return false
      }
      n = n / 2
    }
    return true
  }
  

  
  console.log(isPowerOfTwo(1)) // true
  console.log(isPowerOfTwo(2)) // true
  console.log(isPowerOfTwo(5)) // false
  
// time complexity 
  //   Big - O = O(logn)  




  
  //   below is the one with constant time complexity
  function isPowerOfTwoBitWise(n) {
    if (n < 1) {
      return false
    }
    return (n & (n - 1)) === 0
  }

//   Big - O = O(1)