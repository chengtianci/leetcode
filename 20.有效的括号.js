/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let charStack = [];
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        switch (element) {
            case '(':
                charStack.push(element);
                break;
            case ')':
                if(charStack.pop()!=getValue(element)){
                    return false;
                };
                break;
            case '[':
                charStack.push(element);
                break;
            case ']':
                if(charStack.pop()!=getValue(element)){
                    return false;
                };
                break;
            case '{':
                charStack.push(element);
                break;
            case '}':
                if(charStack.pop()!=getValue(element)){
                    return false;
                };
                break;    
            default:
                break;
        }
        
    }
    if(charStack.length!=0){return false;}
    return true;
};

var getValue = function (param) {
    switch (param) {
        case ')':
            return '(';
        case ']':
            return '[';
        case '}':
            return '{';   
        default:
            return -1;
    }
}
// @lc code=end

