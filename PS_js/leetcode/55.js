/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function (nums) {
    let canj = new Array(...nums);
    let canmax = canj[0];
    let count = nums.length;
    for(let i = 0; i < canj.length; i++){
        canj[i] += i;
    }
    while(count--){
        let temp = canj.slice(0, canmax + 1);
        let tempmax = Math.max(...temp);
        //??
        if(tempmax >= nums.length - 1) return true;
        if((tempmax == canmax) && (tempmax < nums.length)) return false;
        canmax = tempmax; 
    }
    return true;
};

//2898ms, 10.28%
//57.6mb, 5.14%