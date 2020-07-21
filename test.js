let nums1 = [2, 0];
let nums2 = [1];
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = Infinity;
    }
    let j = 0;
    let i = 0;
    let val = Infinity
    for (; i < n + m, j < n; i++) {
        let mini = Math.min(Math.min(val, nums1[i]), nums2[j]);
        if (mini == nums1[i]) {
            continue;
        } else if (mini == val) {
            let temp = nums1[i];
            nums1[i] = val;
            val = temp;
        } else {
            val = nums1[i];
            nums1[i] = nums2[j];
            j++;
        }
    }
    if (j != n) {
        for (let i = j; i < n; i++) {
            nums1[m + i] = nums2[i];
        }
    }
    if (i != n + m) {
        for (; i < n + m; i++) {
            if (val < nums1[i]) {
                let t = nums1[i];
                nums1 = val;
                val = t;
            }
        }
    }

};
console.log(nums1);
merge(nums1, 1, nums2, 1);
console.log(nums1);
