/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

示例 2：
输入：nums = []
输出：[]

示例 3：
输入：nums = [0]
输出：[]

题目要求如下
    找到3个数想加等于0，而不是“两数之和”中的target，因此本题相当于是个特例
    题目要求返回的是数本身，而不是索引值
    这道题存在多个答案，与上题不同，本题要求返回所有可能的答案
    答案中不可以包含重复的三元组，所以需要考虑去重
*/

/**
 * *思路
 * 由于这道题要求的不再是返回索引值，因此先排序，然后使用双指针的思路是可行的。具体算法是先对原数组进行一次排序，
 * 然后一层循环固定一个元素，循环内部利用双指针找出剩下的两个元素，这里要特别注意需要去重，上述算法除去排序部分的
 * 时间复杂度为O(n^2)
 */

 var threeSum = function (nums = []) {
  let n = nums.length;
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < n - 2; i++) {
      /** 去重 */
      if (i > 0 && nums[i] == nums[i - 1]) {
          continue
      }
      /** 固定i，寻找l和r，使用双指针法 */
      let l = i + 1;
      let r = n - 1;
      while (l < r) {
          if (nums[i] + nums[l] + nums[r] < 0) {
              l++
          } else if (nums[i] + nums[l] + nums[r] > 0) {
              r--
          } else {
              res.push([nums[i], nums[l], nums[r]])
              /** 去重 */
              while (l < r && nums[l] == nums[l + 1]) {
                  l++
              }
              while (l < r && nums[r] == nums[r - 1]) {
                  r--
              }
              l++
              r--
          }
      }
  }
  console.log(res);
};
// let nums = [-1, 0, 1, 2, -1, -4];
// let nums = [];
let nums = [0];
threeSum(nums)
/**
* * 复杂度分析
* 时间复杂度：上述代码for循环内部虽然有两个while循环，但是这两个while循环也仅仅会扫描一遍数组（最里面的
*            while循环只是跳过一些重复的元素而已），因此总的时间复杂度仍然是O(n^2),而不是O(n^3)，其中n为数组长度
* 空间复杂度：不确定，取决于内部排序算法的具体实现
* */