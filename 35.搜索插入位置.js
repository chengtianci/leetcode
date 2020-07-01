/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target);
    if(index!=-1){return index;}
    let pos = 0;
    for (; pos < nums.length; pos++) {
        const element = nums[pos];
        if (element>target) {
            break;
        }
    }
    return pos;
};
// @lc code=end

