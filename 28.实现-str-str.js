/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle==''){return 0 ;}
    let index = 0, endFlag = false;
    for (let ni = 0;endFlag == false && index < haystack.length; ) {
        if(haystack[index] == needle[ni]) {
            for (let nc = index; ni < needle.length;) {
                if(needle[ni] == haystack[nc]) {
                    nc++;
                    ni++;
                }else{
                    break;
                }
            }
            if(ni == needle.length) {
                //成功匹配
                endFlag = true;
            }else{
                //匹配失败
                index++;
                ni = 0;
            }
        }else {
            index ++;
            ni = 0;
        }
    }
    if(endFlag) {return index ;}
    else{return -1;}
};
// @lc code=end

