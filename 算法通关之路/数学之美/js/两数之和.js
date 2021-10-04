/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]

*/
/** 
 * * 解法一 哈希表
 * 
 * 思路
 * 
 * 对数组进行遍历，每一项都判断target - nums[i]
 * 是否在之前遍历中遇到过，如果是，则直接返回；
 * 不是则放入哈希表钟，继续遍历下一项
 */
var twoSum = function (nums = [], target) {
    let map = {}, n = nums.length;
    for (let [index, item] of nums.entries()) {
        if (map[target - item] != undefined) {
            return [map[target - item], index]
        } else {
            map[item] = index
        }
    }
};

/**
 * 时间复杂度:O(n),其中n为数组长度
 * 空间复杂度:O(n),其中n为数组长度
 *
 * 这种算法对于这种需要返回索引的场景非常有效，比如题目要求返回的两个索引值按照原数组中出现的先后顺序返回
 * 又或者题目要求按照元素值的大小返回，也可以拿出来比较一下返回即可
 */
