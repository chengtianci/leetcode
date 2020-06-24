/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let subPrefix = '';
    let maxLen = -1;
    for (let i = 0; i < strs.length; i++) {
        if(maxLen < strs[i].length) {
            maxLen = strs[i].length;
        }
    }
    let flag = true;
    for (let index = 0; index < maxLen&&flag; index++) {
        const elementChar = strs[0][index];
        let res = strs.every(element => {
            return elementChar==element[index];
        });
        
        if(res){
            console.log(elementChar);
            console.log("before: "+subPrefix);
            subPrefix+=elementChar;
            console.log("after: "+subPrefix);
        }else{
            flag = false;
        }   
    }
    return subPrefix;
};
// @lc code=end

