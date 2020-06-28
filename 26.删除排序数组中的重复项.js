/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pre = undefined;
    let preIndex = 0 ;
    for (let index = 0,len = nums.length; index < len; index++) {
        const element = nums[index];
        if(pre !=element) {
            nums[preIndex] = element;
            pre = element;
            preIndex +=1;
        }
    }
    return preIndex;
};
// @lc code=end

