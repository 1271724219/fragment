/* 
给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。

水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。

反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。

 

示例 1：

输入：[[1,1,0],[1,0,1],[0,0,0]]
输出：[[1,0,0],[0,1,0],[1,1,1]]
解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
     然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
示例 2：

输入：[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
     然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 */
/**
 * * 思路
 * 1. 创建一个数组留存储最后结果的
 * 2. 遍历第一层数组创建一个数组存储临时值
 * 3.遍历二维数组将每个二维数组的值反转并通过位运算得到相反的值（0->1,1->0）
 * 4.将每层结果放在结果数组中
 *  */
var flipAndInvertImage = function (image) {
  let arr = [];
  for (const item of image) {
    let list = [];
    let n = item.length;
    for (let i = 0; i < n; i++) {
      list[i] = 1 ^ item[(n - (i + 1)) % n];
    }
    arr.push(list);
  }
  return arr;
};
