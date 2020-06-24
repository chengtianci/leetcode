let result = [];
let nums = [-1, 0, 1, 2, -1, -4]

for (let l = 0,con=true; l < nums.length && con; l++,con = true) {
        const element1 = nums[l];
        for (let m = l+1; m < nums.length && con; m++) {
            const element2 = nums[m];
            for (let n = m+1; n < nums.length && con; n++) {
                const element3 = nums[n];
                if(0==element1+element2+element3){
                    con = false;
                    let temp = new Array(element1,element2,element3).sort();
                    if(!result.includes(temp)){result.push(temp);}
                }
            }
        } 
    }

console.log(result);