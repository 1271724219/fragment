/* 

给你一个整数数组 nums ，返回数组中最大数和最小数的 最大公约数 。

两个数的 最大公约数 是能够被两个数整除的最大正整数。

 

示例 1：

输入：nums = [2,5,6,9,10]
输出：2
解释：
nums 中最小的数是 2
nums 中最大的数是 10
2 和 10 的最大公约数是 2
示例 2：

输入：nums = [7,5,6,8,3]
输出：1
解释：
nums 中最小的数是 3
nums 中最大的数是 8
3 和 8 的最大公约数是 1
示例 3：

输入：nums = [3,3]
输出：3
解释：
nums 中最小的数是 3
nums 中最大的数是 3
3 和 3 的最大公约数是 3

*/
/**
 * * 思路
 * 1. 从小到大枚举出其中一个公约数，判断是否是另一个数的公约数，如果是则直接返回
 * 2. 遍历得到最大值与最小值
 * 3. 求出最大公约数
 */
function gcd(min, max) {
  for (let i = min; i > 1; i--) {
    if (min % i == 0 && max % i == 0) return i;
  }
  return 1;
}
var findGCD = function (nums) {
  let min = nums[0],
    max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item < min) min = item;
    if (item > max) max = item;
  }
  return gcd(min, max);
};
