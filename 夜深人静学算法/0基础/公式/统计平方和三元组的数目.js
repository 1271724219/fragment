/* 
一个 平方和三元组 (a,b,c) 指的是满足 a2 + b2 = c2 的 整数 三元组 a，b 和 c 。

给你一个整数 n ，请你返回满足 1 <= a, b, c <= n 的 平方和三元组 的数目。

 

示例 1：

输入：n = 5
输出：2
解释：平方和三元组为 (3,4,5) 和 (4,3,5) 。
示例 2：

输入：n = 10
输出：4
解释：平方和三元组为 (3,4,5)，(4,3,5)，(6,8,10) 和 (8,6,10) 。

*/
/**
 * *思路
 * 1. 创建一个函数返回最大值
 * 2. 两次遍历拿到a，b
 * 3. 求a,b的平方和
 * 4. 比较a,b的最大值加1（因为c一定比a或b大），遍历得到c 如果c*c = a*a + b * b，计数加一并跳出循环
 * 5. 如果c的平方大于a*a+b*b，那么将不会有满足条件的，跳出循环
 */
function max(a, b) {
  return a > b ? a : b;
}
var countTriples = function (n) {
  let sum,
    res = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      sum = i * i + j * j;
      for (let k = max(i, j) + 1; k <= n; k++) {
        if (k * k == sum) {
          res++;
          break;
        }
        if (k * k > sum) {
          break;
        }
      }
    }
  }
  return res;
};
