/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let number = Number.MIN_SAFE_INTEGER;
    let ansArr = Array.from(Array(nums.length + 1), () => Array(nums.length + 1).fill(1));
    for (let i = 0; i < nums.length; i++) {
        ansArr[i][i] = nums[i]
    }
    // if(nums.length == 1){
    //     return nums[0];
    // }
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i; j < nums.length; j++) {
            for (let k = i; k <= j; k++) {

            }
        }
    }
    return number;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = nums[0];
    let localMax = 1;
    let localMin = 1;
    let localMaxTemp = localMax;
    
    for (num of nums) {      
        localMaxTemp = localMax;
        localMax = Math.max(localMax * num, localMin * num, num);
        localMin = Math.min(localMaxTemp * num, localMin * num, num);
        result = Math.max(localMax, result);
    }
    
    return result;
};