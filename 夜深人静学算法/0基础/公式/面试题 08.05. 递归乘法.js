/* 
递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。

示例1:

 输入：A = 1, B = 10
 输出：10
示例2:

 输入：A = 3, B = 4
 输出：12
*/
/**
 * *思路1直接乘（不符合题意）
 */
var multiply = function (A, B) {
  return A * B;
};
/**
 * *思路2 递归
 *   想想我们当时学乘法的时候是不是说一个数乘另一个数就相当于多少个另一个数相加，按举例来说例1为10+0或0+10（一个10相加），
 * 例2为3+3+3+3或4+4+4（4个三相加或3个四相加），那么是不是有些思路了呢
 *  1.分别比较取得4||3的最大值与最小值
 *  2.永远让最大数相加每加一次，最小值减一
 *  3.如果最小值为1那么返回最大数
 */

var multiply = function (A, B) {
  // 1
  let min = Math.min(A, B);
  let max = Math.max(A, B);
  // 3
  if (min == 1) {
    return max;
  }
  // 2
  return max + multiply(min - 1, max);
};

/**
 * *位运算
 * 这里附上位运算的加减乘除地址https://www.jianshu.com/p/6e18c2e5eefe或https://blog.csdn.net/weixin_45981516/article/details/112642168
 * 我是将上面的思路用位运算
 */

/**
 * *位运算 加
 * 1.不考虑进位的按位求和，异或
 * 2.只考虑进位，只有(1,1)才会产生进位，使用按位与可以满足要求。
 * 当前位产生进位，要参与高一位的运算，因此按位与后要向左移动一位
 * 3.递归求和，直到进位为0
 *   */
let add = (a, b) => {
  let ans;
  do {
    ans = a ^ b; //求a,b的和（不进位）
    b = (a & b) << 1; //求a,b的进位的数，令赋值给b
    a = ans; //令不进位的值赋值给a，开始下一次求和
  } while (b != 0);
  return ans;
};
/**
 * *位运算
 * 乘
 */
let ride = (a, b) => {
  let ans = 0;
  while (b) {
    if (~(~b | ~1)) {
      //判断y的二进制最后一位是否为1（为1则为True）
      ans = add(ans, a);
    }
    a = a << 1;
    b = b >> 1;
  }
  return ans;
};
ride(3, 4);
/*位运算1 */
var multiply = function (A, B) {
  let min = Math.min(A, B);
  let max = Math.max(A, B);
  if (min == 1) {
    return max;
  }
  return add(max, multiply(min - 1, max));
};
/*位运算2 */
var multiply = function (A, B) {
  return ride(A, B);
};
