/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(l1, l2) {
    if(l1 == null && l2 == null) {return null;};
    if(l1 == null ) {return l2;};
    if(l2 == null ) {return l1;};
    let l1p = new ListNode();
    let l2p = new ListNode();
    let pre = new ListNode();
    let result = new ListNode();
    let temp = new ListNode();
    //链头小的当拼接结果
    if(l1.val > l2.val){
        l1p = l2;
        l2p = l1;
        result = l2;
    }else{
        l1p = l1;
        l2p = l2;
        result = l1;
    }
    //比较拼接链表
    for (pre = l1p ,l1p = l1p.next;l1p != null && l2p != null ;pre = pre.next ) {
        console.log("l1p.val : "+l1p.val);
        console.log("l2p.val : "+l2p.val);
        if(l1p.val>l2p.val){
            console.log("start exchanging...");
            temp = l2p.next;
            l2p.next = l1p;
            pre.next = l2p;
            l2p = temp;
            console.log("end exchanging ...");
        }else{
            l1p = l1p.next;
        } 
    }
    if(l1p == null ){ pre.next = l2p; }
    else if(l1p.next == null) {
        l1p.next = l2p;
    }
    return result;
};
// @lc code=end

