let haystack = "mississippi";
let needle  = "issip";
if(needle==''){return 0 ;}
let index = 0, endFlag = false;
for (let ni = 0;endFlag == false && index < haystack.length; ) {
    
    if(haystack[index] == needle[ni]) {
        for (let nc = index; ni < needle.length;) {
            if(needle[ni] == haystack[nc]) {
                nc++;
                ni++;
            }else{
                break;
            }
        }
        if(ni == needle.length) {
            //成功匹配
            endFlag = true;
        }else{
            //匹配失败
            index++;
            ni = 0;
        }
    }else {
        index ++;
        ni = 0;
    }
}
if(endFlag) {console.log(index) }
else{console.log(-1);}