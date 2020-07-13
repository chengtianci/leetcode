// let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
// let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
// console.log(parseInt(a,2))
// console.log(parseInt(b,2))
// console.log((parseInt(a,2) + parseInt(b,2)).toString(2))
// console.log("110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000")
// console.log("110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000")

function pad(num, n) {
    var len = num.toString().length;
    while(len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}
let a = "1011010100100011110000101110101101000010010110001001000011011";
console.log("a  length : "+a.length)
let b = "11001011101011001000100100111111011110001000100011101111100101";
console.log("a  length : "+b.length)
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
    if(c){
        result.unshift(c);
    }
}
console.log(result.join(''));