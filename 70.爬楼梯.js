/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1){return 1;}
    if(n==2){return 2;}
    let db = new Array(n);
    db[0] = 1;
    db[1] = 2;
    for (let index = 2; index < n; index++) {
        db[index] = db[index-1]+db[index-2];
    }
    return db[n-1];
};
// @lc code=end

