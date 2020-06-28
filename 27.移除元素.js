/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    for (let index = 0; index < len; ) {
        if(nums[index] == val ){
            nums[index] = nums[len-1];
            len = len - 1;
        }else{
            index++;
        }
    }
    //nums = nums.splice(0,len);
    return len ; 
};
// @lc code=end

