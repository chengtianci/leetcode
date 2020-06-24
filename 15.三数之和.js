/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    let flags = new Array(nums.length);
    flags.forEach(element => {element = false;})
    for (let i = 0; i < flags.length; i++) {
        flags[i] = false;
    }
    for (let l = 0; l < nums.length; l++) {
        if(!flags[l]){continue;}
        const element1 = nums[l];
        for (let m = 0; m < nums.length; m++) {
            if(!flags[m] && l!=m){continue;}
            const element2 = nums[m];
            for (let n = 0; n < nums.length; n++) {
                if(!flags[n] && l!=n && m!=n){continue;}
                const element3 = nums[n];
                if(0==element1+element2+element3){
                    flags[l] = true;
                    flags[m] = true;
                    flags[n] = true;
                    result.push(new Array(element1,element2,element3));
                }
            }
        }
        
    }
};
// @lc code=end

