/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/* *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head == null) return null;
    let point = new ListNode();
    let pre = new ListNode();

    for (point = head.next, pre = head; point != null;) {
        if (pre.val == point.val) {
            //del
            pre.next = point.next;
            point = point.next;
        } else {
            //move point&pre
            pre = pre.next;
            point = point.next
        }
    }
    return head;
};
// @lc code=end
// 网上精选解答
// var deleteDuplicates = function(head) {
//     var cur = head;
//     while(cur && cur.next) {
//         if(cur.val == cur.next.val) {
//             cur.next = cur.next.next;
//         } else {
//             cur = cur.next;
//         }
//     }
//     return head;
// };
