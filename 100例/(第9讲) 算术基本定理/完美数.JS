/* 
对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

给定一个 整数 n， 如果是完美数，返回 true，否则返回 false

 

示例 1：

输入：28
输出：True
解释：28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, 和 14 是 28 的所有正因子。
示例 2：

输入：num = 6
输出：true
示例 3：

输入：num = 496
输出：true
示例 4：

输入：num = 8128
输出：true
示例 5：

输入：num = 2
输出：false

*/

/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function (num) {
    if (num == 1) {
        return false;//1的情况特殊判断
    }
    let sum = 1;
    for (let i = 2; i * i <= num; i++) { //只需要枚举到√num
        if (num % i == 0) {//找到因子i与num/i累加
            sum += i;
            if (i * i != num) {
                sum += num / i; 
            }

        }
    }
    return sum == num;

};