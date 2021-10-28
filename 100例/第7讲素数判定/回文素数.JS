/* 
所有的回文素数都是奇数位的。偶数位的回文数不是素数(证明可以百度)
然后依次构造回文数 只要比N大 再判断是不是素数就可以了

 */
var primePalindrome = function(N) {
    if (N <= 11) {
      if (N > 7) return 11 
      if (N > 5) return 7 
      if (N > 3) return 5 
      if (N > 2) return 3
      return 2 
    }
  //   判断是不是质数
    let isPrime = function (N) {
      if (N < 2) return false;
      // 技巧是开方，判断如果开方都能被整除那么后面就不用判断了肯定不满足质数条件,这么干至少节省了一半效率
      for (let d = 2, R = Math.sqrt(N); d <= R; ++d)
          if (N % d == 0) return false;
      return true;
    }
    let getNum = function(num) {
        console.log(num,'')
      return parseInt(num + num.toString().split('').reverse().slice(1).join(''))
    }
  // 20000构造的回文数是 200000002 就大于了题目要求的上限所以这里也用到了开方，我们需要做一个回文数，但是这个数要至少大于10,
    for (let i = Math.max(Math.floor(Math.sqrt(N)), 10); i < 20000; ++i) {
      //   求出回文数
      let num = getNum(i)
      if (num >= N && isPrime(num)) {
        return num 
      }
    }
  }
  