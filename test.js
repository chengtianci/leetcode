let nums = [3,2,2,3];
let val  = 3;

let len = nums.length;
for (let index = 0; index < len; ) {
    const element = nums[index];
    if(element == val ){
        nums[index] = nums[len-1];
        len -= 1;
    }else{
        index++;
    }
}
nums = nums.splice(0,len);
console.log(nums);
console.log(len);