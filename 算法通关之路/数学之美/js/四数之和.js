/**
 * 这道题目在三数之和的基础上，数的个数又增加了一个，变成了4个，
 * 并且上一个题相比，本题的target不恒等于0
 * 首先考虑暴力法解决
 *
 * *思路
 *    一个符号直觉的算法是暴力地将所有的四元组枚举初来，并判断其和是否等于target。
 * 唯一需要注意的是去重，比如[-1,0,0,1]和[0,0,-1,1]只能算一个四元组。
 * 在这里使用了序列化数组作为key，四元组作为value的方法，
 * 将其保存到hashmap中来达到去重的目的
 *
 *    这里会用到回溯法，而回溯法的基本思路是，首先固定一个元素，然后固定第二个元素······
 * 直到找到全部元素（在这里是四个元素）确定下来，判断是否满足需求（在这里是不重复且和为target）
 * 如果满足要求，则将其加入结果集；如果不满足需求，则回退一步走其他分支，这种每次面临多个
 * 选择，选择其中一个走到头，之后回退到选择点继续其他选择的方法，被称为回溯法
 */
// var fourSum = function (nums, target) {
//   let res = [],
//     hashMap = new Map(),
//     n = nums.length;
//   nums = nums.sort((a, b) => a - b);
//   backtrack(res, hashMap, n, target, 0, [], nums);
//   console.log(res);
// };
// function backtrack(res, hashMap, n, remain, start, tempList, nums) {
//   if (tempList.length > 4) {
//     return;
//   }
//   if (remain == 0 && tempList.length == 4) {
//     if (hashMap.has(tempList.join())) {
//       return;
//     } else {
//       let tempListN = JSON.parse(JSON.stringify(tempList));
//       hashMap.set(tempList.join(), true);
//       res.push(tempListN);
//       return;
//     }
//   }
//   for (let i = start; i < n; i++) {
//     tempList.push(nums[i]);
//     backtrack(res, hashMap, n, remain - nums[i], i + 1, tempList, nums);
//     tempList.pop();
//   }
// }
// fourSum([1, 0, -1, 0, -2, 2], 0);

/**
 * 时间复杂度：时间复杂度取决于组合数，由排列组合原理可知，组合数共有
 *            n(n-1)(n-2)(n-3)个，因此时间复杂度为O(n^4)个，其中长度为数组的长度
 * 空间复杂度：由于使用了hashmap来存储所有访问过的组合因此空间复杂度为O(n^4)，其中n为数组长度
 */

/**解法2 分治法 */

// 上面的算法比较直观，容易想到，直接套模板就可以解，但是有风险,推荐更优的算法

/** play
 * *思路
 * 可以将问题分解为若干个子问题，对子问题求解后将解合并即可，具体来看，
 * 可以先将四数和four_num分解为两数和，即towSum（a，threeSum（A）），其中a是数组中任意数，
 * A是除a之外饿其他数的集合接下来继续对三数和threeSum进行分解，将其分解为twoSum
 * （b，twoSum（B）），这样就把四数和问题转化为了两数和问题
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  findNsum(nums, target, 4, [], result);
  console.log(result);
  return result;
};

function findNsum(nums, target, N, tempList, result) {
  if (nums.length < N || N < 2) {
    return;
  }
  if (N == 2) {
    let l = 0,
      r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] == target) {
        console.log(tempList, nums[l], nums[r]);
        result.push([...tempList, nums[l], nums[r]]);
        l += 1;
        r -= 1;

        while (l < r && nums[l] == nums[l - 1]) {
          l += 1;
        }
        while (r > l && nums[r] == nums[r + 1]) {
          r -= 1;
        }
      } else if (nums[l] + nums[r] < target) {
        l += 1;
      } else {
        r -= 1;
      }
    }
  } else {
    let arr = JSON.parse(JSON.stringify(nums));
    for (let i = 0; i < nums.length; i++) {
      arr.shift();
      if (i == 0 || i > 0 && nums[i - 1] != nums[i]) {
        findNsum(arr, target - nums[i], N - 1, [...tempList, nums[i]], result);
      }
    }
  }
  return;
}
fourSum([1, 0, -1, 0, -2, 2], 0);
