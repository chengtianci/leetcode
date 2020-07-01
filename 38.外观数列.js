/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n<1||n>30) {
        return -1;
    }
    if (n==1) {
        return "1";
    }else if (n==2) {
        return "11";
    }
    let results = {1:"1",2:"11"};
    for (let index = 3; index <= n; index++) {
        results[index] = scan(results[index-1]);
    }
    return results[n];
};
var scan = function(str){
    if(str == ''){return 'empty input'};
    
    let char = str[0];
    let count = 1;
    let result = "";
    for (let index = 1; index <= str.length; index++) {
        const element = str[index];
        if (element == char) {
            count++;
        }else{
            result = result.concat(''+count+char);
            count = 1;
            char = element;
        }
    }
    return result;
}
// @lc code=end

