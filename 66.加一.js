/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let integer = Number(digits.join(""));
    if (Number(digits.join("")) < Number.MAX_SAFE_INTEGER) {
        return String(integer + 1).split("").map((s) => Number(s));
    }

    const len = digits.length;
    for(let i = len -1;i>=0;i--){
        digits[i]++;
        digits[i]%=10;
        if(digits[i]!=0){return digits}
    }
    digits = [1,...Array(len).fill(0)];
    return digits;
};
// @lc code=end

