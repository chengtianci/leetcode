/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s=='' || s==null){return 0};
    s = s.trim();
    if(s.lastIndexOf(' ') == -1) {return s.length}
    return s.length-s.lastIndexOf(' ')-1;
};
// @lc code=end

