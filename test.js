let x = 45;
var climbStairs = function(n) {
    if(n==1){return 1;}
    if(n==2){return 2;}
    let db = new Array(n);
    db[0] = 1;
    db[1] = 2;
    for (let index = 2; index < n; index++) {
        db[index] = db[index-1]+db[index-2];
    }
    return db[n-1];
};
console.log(climbStairs(x));