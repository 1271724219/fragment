/* 
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]

*/

var generate = function (numRows) {
    /**
 * * 思路
 * 1.创建一个数组用于存放最终结果
 * 2.枚举出0-numRows的值
 * 3.每次遍历都创建一个新数组,因为首尾都是1我们将所有数组都填充为1
 * 4.除去首尾，当前的值为上一个的当前值的上一个+上一个的当前值
 * 5.放进数组中
 *  */
    let res = []

    for (let i = 0; i < numRows; i++) {
        let arr = new Array(i + 1).fill(1)
        for (let j = 1; j < i; j++) {
            arr[j] = res[i - 1][j - 1] + res[i - 1][j]
        }
        res.push(arr)
    }
    return res
};