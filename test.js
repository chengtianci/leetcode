function ListNode (val) {
    this.val = val;
    this.next = null;
}
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
let h = new ListNode(1);

let h1 = new ListNode(1);
let h2 = new ListNode(1);
let h3 = new ListNode(1);
let h4 = new ListNode(1);
h.next = h1;
h1.next = h2;
h2.next = h3;
h3.next = h4;
let res = deleteDuplicates(h);
console.log("```");
for (; res != null; res = res.next) {
    console.log("```");

    console.log(res.val);
}