/* 
给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

以数组形式返回答案。

 

示例 1：

输入：nums = [8,1,2,2,3]
输出：[4,0,1,1,3]
解释： 
对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
对于 nums[1]=1 不存在比它小的数字。
对于 nums[2]=2 存在一个比它小的数字：（1）。 
对于 nums[3]=2 存在一个比它小的数字：（1）。 
对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
示例 2：

输入：nums = [6,5,4,8]
输出：[2,1,0,3]
示例 3：

输入：nums = [7,7,7,7]
输出：[0,0,0,0]
 

提示：

2 <= nums.length <= 500
0 <= nums[i] <= 100

*/
/**
 * * 思路
 * 暴力解两层循环
 * 1.设置一个数组res并循环数组取得当前数item，
 * 2.设置一个值sum用作记录，再次循环数组用item和循环的每个数比较，如果小于sum+1
 * 3. 将sum添加到数组res
 * 4.返回这个数组
 */
var smallerNumbersThanCurrent = function (nums) {
  let res = [],
    n = nums.length;
  for (let i = 0; i < n; i++) {
    let item = nums[i],
      sum = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] < item) {
        sum++;
      }
    }
    res.push(sum);
  }
  return res;
};
/**
 * 复杂度分析
 * 时间复杂度：O(n^2) n为数组长度，这里又套了一层循环
 * 空间复杂度: O(n)
 */
