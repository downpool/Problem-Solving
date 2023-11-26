/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
    let result = nums[0];
    let count = 1;
    let localMax = 1;
    let localMin = 1;
    let localMaxTemp = localMax;

    for (num of nums) {
        localMaxTemp = localMax;
        localMax = Math.max(localMax * num, localMin * num, num);
        localMin = Math.min(localMaxTemp * num, localMin * num, num);
        if(localMax >= result){
            count++
            result = localMax;
        }
        // result = Math.max(localMax, result);
    }

    return count;
};