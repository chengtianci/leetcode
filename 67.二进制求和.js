/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length<31&&b.length<31){
        return (parseInt(a,2)+parseInt(b,2)).toString(2)
    }
    let result = [];
    //短补0
    let length = -1;
    if(a.length>b.length){
        length = a.length;
        b = pad(b,length);
    }else if(a.length<b.length){
        length = b.length;
        a = pad(a,length);
    }else{
        length = a.length;
    }
    let c = 0;
    for (let index = length-1; index>=0; index--) {
        const elementA = +a[index];
        const elementB = +b[index];
        let sum = elementA+elementB+c;
        if(sum == 0){
            c = 0;
            result.unshift(0);
        }else if (sum ==1){
            c = 0;
            result.unshift(1);
        }else if (sum ==2){
            c= 1;
            result.unshift(0);
        }else if (sum == 3){
            c = 1;
            result.unshift(1);
        }
    }
    if(c){
        result.unshift(c);
    }
    return result.join('');
};


function pad(num, n) {
    var len = num.toString().length;
    while(len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}
// @lc code=end

